// new.js - ES module that adds "Save File" functionality
// Uses the File System Access API when available; falls back to a download.

let fileHandle = null; // Remember the chosen file for future saves (per session)
let lastFilename = null; // Remember last filename for non-FS Access fallback
const LS_LAST_FILENAME = 'lastFilename';
const LS_KNOWN_FILENAMES = 'knownFilenames';

try {
  lastFilename = localStorage.getItem(LS_LAST_FILENAME) || null;
} catch (_) {
  // Ignore storage errors (private mode, etc.)
  lastFilename = null;
}

function loadKnownFilenames() {
  try {
    const raw = localStorage.getItem(LS_KNOWN_FILENAMES);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) return new Set(arr);
  } catch (_) {}
  return new Set();
}

function saveKnownFilenames(set) {
  try {
    localStorage.setItem(LS_KNOWN_FILENAMES, JSON.stringify(Array.from(set)));
  } catch (_) {}
}

function addKnownFilename(name) {
  const set = loadKnownFilenames();
  set.add(name);
  saveKnownFilenames(set);
}

function isKnownFilename(name) {
  const set = loadKnownFilenames();
  return set.has(name);
}

function supportsFSAccess() {
  return 'showSaveFilePicker' in window && 'FileSystemWritableFileStream' in window;
}

function getEditorText() {
  // editor is exposed globally in script.js
  if (window.editor && typeof window.editor.getValue === 'function') {
    return window.editor.getValue();
  }
  // Fallback to the textarea if editor isn't ready
  const ta = document.getElementById('editor');
  return ta ? ta.value : '';
}

function setEditorText(text) {
  if (window.editor && typeof window.editor.setValue === 'function') {
    window.editor.setValue(text);
    return;
  }
  const ta = document.getElementById('editor');
  if (ta) ta.value = text;
}

async function saveWithHandle(handle) {
  const contents = getEditorText();
  const writable = await handle.createWritable();
  await writable.write(contents);
  await writable.close();
}

async function pickSaveFile() {
  // Suggest a default name based on first non-empty line or generic fallback
  const text = getEditorText();
  const firstLine = (text.split(/\r?\n/).find(l => l.trim().length) || '').trim();
  const suggestedName = firstLine ?
    firstLine.replace(/[^a-z0-9._-]+/gi, '_').slice(0, 30) + '.js' :
    'script.js';

  const opts = {
    suggestedName,
    types: [
      {
        description: 'JavaScript File',
        accept: { 'text/javascript': ['.js'] }
      },
      {
        description: 'Text File',
        accept: { 'text/plain': ['.txt'] }
      }
    ]
  };

  try {
    const handle = await window.showSaveFilePicker(opts);
    return handle;
  } catch (err) {
    if (err && err.name === 'AbortError') {
      // user canceled
      return null;
    }
    throw err;
  }
}

function sanitizeFilename(name) {
  // Replace path separators and illegal characters
  return (name || '')
    .replace(/[\\/:*?"<>|]+/g, '_') // Windows-illegal
    .replace(/\s+/g, ' ')
    .trim();
}

function getSuggestedFilename() {
  if (lastFilename) return lastFilename;
  const text = getEditorText();
  const firstLine = (text.split(/\r?\n/).find(l => l.trim().length) || '').trim();
  const base = firstLine ? firstLine.replace(/[^a-z0-9._-]+/gi, '_').slice(0, 30) : 'script';
  return base.endsWith('.js') ? base : `${base}.js`;
}

function promptForFilename(defaultName) {
  const name = window.prompt('Enter a file name to save', defaultName || 'script.js');
  if (name == null) return null; // user canceled
  let cleaned = sanitizeFilename(name);
  if (!cleaned) cleaned = 'script.js';
  // Ensure it has an extension; default to .js if none
  if (!/\.[A-Za-z0-9]+$/.test(cleaned)) cleaned += '.js';
  try {
    localStorage.setItem(LS_LAST_FILENAME, cleaned);
  } catch (_) {}
  lastFilename = cleaned;
  return cleaned;
}

function promptForFilenameWithConflictResolution(defaultName) {
  // Loop: ask for filename, check for conflict against known names, handle overwrite/rename
  let name = promptForFilename(defaultName);
  if (name == null) return null; // canceled
  while (isKnownFilename(name)) {
    const overwrite = window.confirm(`A file named "${name}" may already exist. Overwrite?\nPress Cancel to enter a new name.`);
    if (overwrite) break;
    const newName = promptForFilename(name);
    if (newName == null) return null; // canceled
    name = newName;
  }
  return name;
}

function downloadFallback(filename) {
  const finalName = filename || getSuggestedFilename();
  const blob = new Blob([getEditorText()], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = finalName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 0);
}

async function handleSaveClick() {
  // If the modern API is available
  if (supportsFSAccess()) {
    try {
      // If we've saved before in this session, write directly
      if (fileHandle) {
        await saveWithHandle(fileHandle);
        console.log('File saved.');
        return;
      }
      // Otherwise prompt for a location/name
      const handle = await pickSaveFile();
      if (!handle) return; // user canceled
      await saveWithHandle(handle);
      fileHandle = handle; // remember for subsequent saves
      try {
        const file = await handle.getFile();
        addKnownFilename(file.name);
        localStorage.setItem(LS_LAST_FILENAME, file.name);
        lastFilename = file.name;
      } catch (_) {}
      console.log('File saved.');
      return;
    } catch (e) {
      console.error('Save failed:', e);
      // If something goes wrong, fall back to download
      const name = promptForFilenameWithConflictResolution(getSuggestedFilename());
      if (!name) return; // canceled
      downloadFallback(name);
      addKnownFilename(name);
      return;
    }
  }

  // If the API isn't available, use a download fallback
  const name = promptForFilenameWithConflictResolution(getSuggestedFilename());
  if (!name) return; // canceled
  downloadFallback(name);
  addKnownFilename(name);
}

// Open File functionality
function supportsOpenPicker() {
  return 'showOpenFilePicker' in window;
}

async function handleOpenClick() {
  // Prefer File System Access API when available (Chromium)
  if (supportsOpenPicker()) {
    try {
      const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
          { description: 'JavaScript', accept: { 'text/javascript': ['.js'] } },
          { description: 'Text', accept: { 'text/plain': ['.txt'] } }
        ]
      });
      if (!handle) return;
      const file = await handle.getFile();
      const text = await file.text();
      setEditorText(text);
      // Remember for saving
      fileHandle = handle;
      try {
        localStorage.setItem(LS_LAST_FILENAME, file.name);
        lastFilename = file.name;
      } catch (_) {}
      addKnownFilename(file.name);
      console.log(`Opened file: ${file.name}`);
      return;
    } catch (e) {
      if (e && e.name === 'AbortError') return; // canceled
      console.error('Open failed:', e);
      // fallback to input chooser
    }
  }

  // Fallback for browsers without FS Access API (e.g., Firefox)
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.js,.txt,text/javascript,text/plain';
  input.style.display = 'none';
  document.body.appendChild(input);
  input.addEventListener('change', async () => {
    const file = input.files && input.files[0];
    if (!file) {
      input.remove();
      return;
    }
    try {
      const text = await file.text();
      setEditorText(text);
      try {
        localStorage.setItem(LS_LAST_FILENAME, file.name);
        lastFilename = file.name;
      } catch (_) {}
      addKnownFilename(file.name);
      console.log(`Opened file: ${file.name}`);
    } catch (err) {
      console.error('Failed to read file:', err);
    } finally {
      input.remove();
    }
  }, { once: true });
  input.click();
}

// Wire up buttons
const saveBtn = document.getElementById('saveBtn');
if (saveBtn) {
  saveBtn.addEventListener('click', handleSaveClick);
} else {
  console.error('Save button not found');
}

const openBtn = document.getElementById('openBtn');
if (openBtn) {
  openBtn.addEventListener('click', handleOpenClick);
} else {
  console.error('Open button not found');
}

export {}; // keep this as a module

/* Notes:
Remembering the directory/filename: browsers don’t let web pages 
access arbitrary directories for security. The File System Access API returns 
a file handle after user selection; we cache that handle in memory for the current session 
and reuse it for subsequent saves without re-prompting.

Browser support: The File System Access API works in Chromium-based browsers (Chrome, Edge). 
If unsupported, clicking Save will download the current editor contents as a .js file.

If you refresh the page, the saved file handle won’t persist. 
Persisting file handles across sessions would require storing them in IndexedDB 
with the FileSystemHandle serialization, which we can add if you want.
*/