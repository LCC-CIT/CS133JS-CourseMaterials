// --- Tabbed Editor Implementation ---

const PLACEHOLDER_PREFIX = "// Write your JS code here";

// Each file: { id, name, doc, isDirty }
let openFiles = [];
let currentFileId = null;
let nextFileId = 1;

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  lineNumbers: true,
  theme: "default"
});

window.editor = editor; // for fileIO.js

function createNewFile(name = "Untitled.js", content = PLACEHOLDER_PREFIX) {
  const doc = new CodeMirror.Doc(content, "javascript");
  const id = nextFileId++;
  openFiles.push({ id, name, doc, isDirty: false });
  switchToFile(id);
  renderTabBar();
}

function switchToFile(id) {
  const file = openFiles.find(f => f.id === id);
  if (!file) return;
  if (currentFileId !== null) {
    // Save current doc content and dirty state
    const cur = openFiles.find(f => f.id === currentFileId);
    if (cur) {
      cur.isDirty = cur.doc.getValue() !== cur.doc._lastSavedValue;
    }
  }
  currentFileId = id;
  editor.swapDoc(file.doc);
  editor.focus();
  renderTabBar();
}

function closeFile(id) {
  const idx = openFiles.findIndex(f => f.id === id);
  if (idx === -1) return;
  openFiles.splice(idx, 1);
  if (openFiles.length === 0) {
    createNewFile();
    return;
  }
  // Switch to previous or next tab
  const newIdx = Math.max(0, idx - 1);
  switchToFile(openFiles[newIdx].id);
  renderTabBar();
}

function renderTabBar() {
  const tabBar = document.getElementById('tab-bar');
  tabBar.innerHTML = '';
  openFiles.forEach(file => {
    const tab = document.createElement('div');
    tab.textContent = file.name + (file.isDirty ? '*' : '');
    tab.style.padding = '6px 10px';
    tab.style.cursor = 'pointer';
    tab.style.background = (file.id === currentFileId) ? '#3a3a3a' : '#2a2a2a';
    tab.style.border = '1px solid #444';
    tab.style.borderRight = 'none';
    tab.style.color = '#fff';
    tab.style.position = 'relative';
    tab.style.display = 'flex';
    tab.style.alignItems = 'center';
    tab.style.fontSize = '14px';
    tab.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    tab.addEventListener('click', () => switchToFile(file.id));
    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.textContent = ' ×';
    closeBtn.style.marginLeft = '8px';
    closeBtn.style.color = '#aaa';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.display = 'inline-block';
    closeBtn.style.lineHeight = '1';
    closeBtn.style.fontSize = '18px';
    closeBtn.style.verticalAlign = 'middle';
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeFile(file.id);
    });
    tab.appendChild(closeBtn);
    tabBar.appendChild(tab);
  });
  // New tab button (always at the end)
  const newTabBtn = document.createElement('button');
  newTabBtn.textContent = '+';
  newTabBtn.title = 'New File';
  newTabBtn.type = 'button';
  newTabBtn.style.background = '#2a2a2a';
  newTabBtn.style.color = '#fff';
  newTabBtn.style.border = '1px solid #444';
  newTabBtn.style.borderRadius = '4px';
  newTabBtn.style.fontSize = '18px';
  newTabBtn.style.cursor = 'pointer';
  newTabBtn.style.padding = '6px 10px';
  newTabBtn.style.marginLeft = '2px';
  newTabBtn.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  newTabBtn.addEventListener('click', () => createNewFile());
  tabBar.appendChild(newTabBtn);
}

// Track dirty state
editor.on('change', (cm, change) => {
  const file = openFiles.find(f => f.id === currentFileId);
  if (file) {
    file.isDirty = true;
    renderTabBar();
  }
});

// Placeholder logic per file
function clearPlaceholderIfPresent(cm) {
  const file = openFiles.find(f => f.id === currentFileId);
  if (!file) return;
  const firstLine = cm.getLine(0) || "";
  if (firstLine.indexOf(PLACEHOLDER_PREFIX) === 0) {
    cm.operation(() => {
      cm.replaceRange("", { line: 0, ch: 0 }, { line: 1, ch: 0 });
    });
    file.isDirty = true;
    renderTabBar();
  }
}
editor.on("keydown", (cm, event) => clearPlaceholderIfPresent(cm));
editor.on("mousedown", (cm, event) => clearPlaceholderIfPresent(cm));

// --- Execution context and console logic ---
// Hidden iframe used as a persistent JS execution context
let __execFrame = null;
function getExecWindow() {
  if (!__execFrame) {
    __execFrame = document.createElement('iframe');
    __execFrame.style.display = 'none';
    document.body.appendChild(__execFrame);
    // Ensure the iframe document has a body
    const doc = __execFrame.contentDocument || __execFrame.contentWindow.document;
    if (!doc.body) {
      doc.open();
      doc.write('<!doctype html><html><head></head><body></body></html>');
      doc.close();
    }
  }
  return __execFrame.contentWindow;
}
function resetExecWindow() {
  if (__execFrame) {
    __execFrame.remove();
    __execFrame = null;
  }
}

function formatArg(arg) {
  if (typeof arg === 'string') return arg;
  try { return JSON.stringify(arg); } catch { return String(arg); }
}
function withConsoleCapture(ctx, run) {
  const output = document.getElementById('console');
  output.textContent = '';
  const origLog = ctx.console?.log;
  const origError = ctx.console?.error;
  const origOnError = ctx.onerror;
  const write = (prefix, args) => {
    const line = (prefix || '') + args.map(formatArg).join(' ') + '\n';
    output.appendChild(document.createTextNode(line));
  };
  // Ensure console exists on context
  if (!ctx.console) ctx.console = {};
  ctx.console.log = (...args) => { if (typeof console?.log === 'function') console.log(...args); write('', args); };
  ctx.console.error = (...args) => { if (typeof console?.error === 'function') console.error(...args); write('Error: ', args); };
  // Capture uncaught errors thrown by executed code
  ctx.onerror = function(message, source, lineno, colno, error) {
    write('Error: ', [error?.message || message]);
    return true; // prevent default logging
  };
  try { run(write); }
  finally {
    if (origLog) ctx.console.log = origLog;
    if (origError) ctx.console.error = origError;
    ctx.onerror = origOnError;
  }
}

function injectScriptIntoContext(ctx, code) {
  const doc = ctx.document;
  const script = doc.createElement('script');
  script.type = 'text/javascript';
  // SourceURL helps debugging in DevTools
  script.text = code + '\n//# sourceURL=editor-run.js';
  doc.body.appendChild(script);
}

function runCode() {
  const file = openFiles.find(f => f.id === currentFileId);
  if (!file) return;
  const ctx = getExecWindow();
  withConsoleCapture(ctx, () => {
    injectScriptIntoContext(ctx, editor.getValue());
  });
}

function clearConsole() {
  const output = document.getElementById('console');
  output.textContent = '';
  // Reset the execution context so variables/functions are cleared
  resetExecWindow();
}

function clearEditor() {
  editor.setValue('');
  const file = openFiles.find(f => f.id === currentFileId);
  if (file) file.isDirty = true;
  renderTabBar();
}

// Expose tabbed editor API for fileIO.js
window.editorTabs = {
  getCurrentFile() {
    return openFiles.find(f => f.id === currentFileId) || null;
  },
  setCurrentFileContent(content) {
    const file = openFiles.find(f => f.id === currentFileId);
    if (file) {
      file.doc.setValue(content);
      file.isDirty = false;
      file.doc._lastSavedValue = content;
      renderTabBar();
    }
  },
  getCurrentFileContent() {
    const file = openFiles.find(f => f.id === currentFileId);
    return file ? file.doc.getValue() : '';
  },
  setCurrentFileName(name) {
    const file = openFiles.find(f => f.id === currentFileId);
    if (file) {
      file.name = name;
      renderTabBar();
    }
  },
  setCurrentFileSaved() {
    const file = openFiles.find(f => f.id === currentFileId);
    if (file) {
      file.isDirty = false;
      file.doc._lastSavedValue = file.doc.getValue();
      renderTabBar();
    }
  },
  openFile(name, content) {
    const doc = new CodeMirror.Doc(content, "javascript");
    const id = nextFileId++;
    openFiles.push({ id, name, doc, isDirty: false });
    switchToFile(id);
    renderTabBar();
  }
};

// Initial file
createNewFile();

// Wire up buttons
window.runCode = runCode;
window.clearConsole = clearConsole;
window.clearEditor = clearEditor;
document.getElementById('runBtn')?.addEventListener('click', runCode);
document.getElementById('clearEditorBtn')?.addEventListener('click', clearEditor);
document.getElementById('clearConsoleBtn')?.addEventListener('click', clearConsole);

// --- Interactive Console (REPL) ---
(function setupRepl() {
  const output = document.getElementById('console');
  const input = document.getElementById('repl-input');
  if (!output || !input) return;

  // Use the same persistent execution iframe as the editor run context
  function getReplWindow() { return getExecWindow(); }

  const REPL = {
    history: [],
    index: -1
  };

  const scrollToBottom = () => { output.scrollTop = output.scrollHeight; };

  const writeLine = (text) => {
    output.appendChild(document.createTextNode(text + '\n'));
    scrollToBottom();
  };

  const stringify = (val) => {
    if (typeof val === 'string') return val;
    // Cross-realm Node check
    if (val && typeof val === 'object' && 'nodeType' in val && 'nodeName' in val) {
      return `[DOM Node ${val.nodeName}]`;
    }
    try {
      return JSON.stringify(val, (_k, v) => (typeof v === 'function' ? `[Function ${v.name||'anonymous'}]` : v), 2);
    } catch {
      return String(val);
    }
  };

  // Tap the iframe's console for the duration of a single run
  function withConsoleTap(ctx, run) {
    const origLog = ctx.console.log;
    const origErr = ctx.console.error;
    ctx.console.log = (...args) => {
      if (typeof console?.log === 'function') console.log(...args);
      writeLine(args.map(stringify).join(' '));
    };
    ctx.console.error = (...args) => {
      if (typeof console?.error === 'function') console.error(...args);
      writeLine('Error: ' + args.map(stringify).join(' '));
    };
    try { return run(); }
    finally {
      ctx.console.log = origLog;
      ctx.console.error = origErr;
    }
  }

  // Evaluate code in the iframe using script injection + direct eval
  function evalInContext(code) {
    const ctx = getReplWindow();
    // Prepare holders
    ctx.__replResult = undefined;
    ctx.__replError = undefined;
    const payload = `(() => { try { window.__replResult = eval(${JSON.stringify(code)}); } catch(e) { window.__replError = e; } })();`;
    // Reuse the injector used by runCode
    (function inject(ctx, js){
      const doc = ctx.document;
      const s = doc.createElement('script');
      s.type = 'text/javascript';
      s.text = js + '\n//# sourceURL=repl-eval.js';
      doc.body.appendChild(s);
    })(ctx, payload);
    if (ctx.__replError) throw ctx.__replError;
    return ctx.__replResult;
  }

  function runLine(code) {
    if (!code.trim()) return;
    writeLine('> ' + code);
    const ctx = getReplWindow();
    try {
      const result = withConsoleTap(ctx, () => evalInContext(code));
      if (typeof result !== 'undefined') writeLine(stringify(result));
    } catch (err) {
      writeLine('Error: ' + (err && err.message ? err.message : String(err)));
    }
  }

  input.addEventListener('keydown', (e) => {
    // History navigation
    if (e.key === 'ArrowUp') {
      if (REPL.history.length) {
        if (REPL.index === -1) REPL.index = REPL.history.length - 1;
        else REPL.index = Math.max(0, REPL.index - 1);
        input.value = REPL.history[REPL.index] || '';
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
      }
      e.preventDefault(); return;
    }
    if (e.key === 'ArrowDown') {
      if (REPL.history.length) {
        if (REPL.index === -1) input.value = '';
        else if (REPL.index >= REPL.history.length - 1) { REPL.index = -1; input.value = ''; }
        else { REPL.index = Math.min(REPL.history.length - 1, REPL.index + 1); input.value = REPL.history[REPL.index] || ''; }
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
      }
      e.preventDefault(); return;
    }
    // Execute on Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const code = input.value;
      if (code.trim()) { REPL.history.push(code); REPL.index = -1; }
      runLine(code);
      input.value = '';
    }
  });
})();