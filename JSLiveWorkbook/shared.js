// Shared helpers for rendering into the left-column Shadow DOM

let hljsCssPromise = null;
let faCssPromise = null;

// Track the source URL of the currently loaded file in the file viewer
window.fileViewerSourceUrl = window.location.href;

// File viewer history stack
window.fileViewerHistory = {
  stack: [],
  index: -1,
  push(url, content, isMarkdown) {
    // If navigating after going back, discard forward history
    if (this.index < this.stack.length - 1) {
      this.stack = this.stack.slice(0, this.index + 1);
    }
    this.stack.push({ url, content, isMarkdown });
    this.index = this.stack.length - 1;
    this.updateButtons();
  },
  go(delta) {
    const newIndex = this.index + delta;
    if (newIndex < 0 || newIndex >= this.stack.length) return;
    this.index = newIndex;
    const entry = this.stack[this.index];
    if (entry) {
      // Render the stored content (markdown or html)
      if (entry.isMarkdown && window.marked && window.hljs) {
        let md = window.stripYamlFrontMatter ? window.stripYamlFrontMatter(entry.content) : entry.content;
        marked.setOptions({
          highlight: function(code, lang) {
            const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language: validLang }).value;
          },
          langPrefix: 'hljs language-'
        });
        renderHtmlToLeftColumn(marked.parse(md), entry.url);
      } else {
        renderHtmlToLeftColumn(entry.content, entry.url);
      }
    }
    this.updateButtons();
  },
  updateButtons() {
    const backBtn = document.getElementById('file-viewer-back');
    const fwdBtn = document.getElementById('file-viewer-forward');
    if (backBtn) backBtn.disabled = this.index <= 0;
    if (fwdBtn) fwdBtn.disabled = this.index >= this.stack.length - 1;
  }
};

// Reusable constructable stylesheets (created once)
let baseSheet = null;
let hljsSheet = null;
let faSheet = null;

// Track which shadows we’ve styled to avoid re-adding constructable sheets
const styledShadows = new WeakSet();

const baseCssText = `
  pre { background: #2d3748; padding: 10px; border-radius: 4px; overflow-x: auto; }
  code { font-family: 'Courier New', monospace; }
  a { color: lightblue; }
  table { border-collapse: collapse; width: 100%; margin: 10px 0; }
  th, td { border: 1px solid #555; padding: 6px 8px; text-align: left; }
  th { background: #333; font-weight: bold; }
`;

const RECENT_KEY = 'recentFiles';

export function getRecentFiles() {
  try {
    const files = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
    console.log('getRecentFiles returning:', files);
    return files;
  } catch (e) {
    console.error('Error parsing recent files:', e);
    return [];
  }
}

export function addRecentFile(file) {
  const recent = getRecentFiles();
  console.log('addRecentFile called with:', file);
  console.log('Current recent files:', recent);
  
  // Remove if already exists (by URL for url type, by name for local type)
  const filtered = recent.filter(f => {
    if (f.type === file.type) {
      if (file.type === 'url') {
        return f.url !== file.url;
      } else {
        return f.name !== file.name;
      }
    }
    return true;
  });
  
  filtered.unshift(file);
  // Keep only 5
  const limited = filtered.slice(0, 5);
  console.log('Storing recent files:', limited);
  localStorage.setItem(RECENT_KEY, JSON.stringify(limited));
}

export function stripYamlFrontMatter(text) {
  if (text.startsWith('---')) {
    const endIndex = text.indexOf('---', 3);
    if (endIndex !== -1) {
      return text.substring(endIndex + 3).trim();
    }
  }
  return text;
}

export function getExtensionFromUrl(url) {
  try {
    const u = new URL(url, window.location.href);
    const last = u.pathname.substring(u.pathname.lastIndexOf('/') + 1);
    const dot = last.lastIndexOf('.');
    return dot >= 0 ? last.slice(dot + 1).toLowerCase() : '';
  } catch {
    return '';
  }
}

async function ensureShadowStyles(shadow) {
  const supportsConstructable =
    'adoptedStyleSheets' in shadow && 'replaceSync' in CSSStyleSheet.prototype;

  // Prepare external CSS promises once
  if (!hljsCssPromise) {
    hljsCssPromise = fetch('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css')
      .then(r => r.text())
      .catch(() => '');
  }
  if (!faCssPromise) {
    faCssPromise = fetch('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css')
      .then(r => r.text())
      .catch(() => '');
  }

  if (supportsConstructable) {
    // Create constructable sheets once
    if (!baseSheet) {
      baseSheet = new CSSStyleSheet();
      baseSheet.replaceSync(baseCssText);
    }
    const [hljsCss, faCss] = await Promise.all([hljsCssPromise, faCssPromise]);
    if (hljsCss && !hljsSheet) {
      hljsSheet = new CSSStyleSheet();
      hljsSheet.replaceSync(hljsCss);
    }
    if (faCss && !faSheet) {
      faSheet = new CSSStyleSheet();
      faSheet.replaceSync(faCss);
    }

    if (!styledShadows.has(shadow)) {
      const toAdd = [baseSheet];
      if (hljsSheet) toAdd.push(hljsSheet);
      if (faSheet) toAdd.push(faSheet);
      shadow.adoptedStyleSheets = shadow.adoptedStyleSheets.concat(toAdd);
      styledShadows.add(shadow);
    }
  } else {
    // Fallback: innerHTML will clear prior <style> nodes, so append each render
    const base = document.createElement('style');
    base.textContent = baseCssText;
    shadow.appendChild(base);

    const [hljsCss, faCss] = await Promise.all([hljsCssPromise, faCssPromise]);
    if (hljsCss) {
      const style = document.createElement('style');
      style.textContent = hljsCss;
      shadow.appendChild(style);
    }
    if (faCss) {
      const style = document.createElement('style');
      style.textContent = faCss;
      shadow.appendChild(style);
    }
  }
}

function enhanceCodeBlocks(shadow) {
  const canHighlight = typeof hljs !== 'undefined' && typeof hljs.highlightElement === 'function';

  const codeBlocks = shadow.querySelectorAll('pre code, code');
  codeBlocks.forEach(block => {
    if (canHighlight && !block.classList.contains('hljs')) {
      hljs.highlightElement(block);
    }
  });

  const pres = shadow.querySelectorAll('pre');
  pres.forEach(pre => {
    const container = document.createElement('div');
    container.style.position = 'relative';
    pre.parentNode.insertBefore(container, pre);
    container.appendChild(pre);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.position = 'absolute';
    buttonsDiv.style.top = '10px';
    buttonsDiv.style.right = '10px';
    buttonsDiv.innerHTML = `
      <button type="button" class="copy-clipboard" title="Copy code" aria-label="Copy code" style="font-size: 14px; padding: 4px 6px; margin-left: 5px; background: #555; color: #fff; border: none; border-radius: 3px; cursor: pointer;"><i class="fas fa-copy" aria-hidden="true"></i></button>
      <button type="button" class="copy-editor" title="Paste into editor" aria-label="Paste into editor" style="font-size: 14px; padding: 4px 6px; margin-left: 5px; background: #555; color: #fff; border: none; border-radius: 3px; cursor: pointer;"><i class="fas fa-edit" aria-hidden="true"></i></button>
    `;
    container.appendChild(buttonsDiv);

    buttonsDiv.querySelector('.copy-clipboard').addEventListener('click', () => {
      navigator.clipboard.writeText(pre.textContent)
        .then(() => console.log('Code copied to clipboard'))
        .catch(err => console.error('Clipboard write failed:', err));
    });
    buttonsDiv.querySelector('.copy-editor').addEventListener('click', () => {
      const defaultComment = '// Write your JS code here';
      if (window.editorTabs && typeof window.editorTabs.getCurrentFileContent === 'function') {
        let currentContent = window.editorTabs.getCurrentFileContent();
        // Remove default comment if that's all that exists
        if (currentContent.trim() === defaultComment) {
          currentContent = '';
        }
        const newContent = currentContent ? currentContent + '\n' + pre.textContent : pre.textContent;
        window.editorTabs.setCurrentFileContent(newContent);
      } else if (window.editor) {
        let currentContent = window.editor.getValue();
        // Remove default comment if that's all that exists
        if (currentContent.trim() === defaultComment) {
          currentContent = '';
        }
        const newContent = currentContent ? currentContent + '\n' + pre.textContent : pre.textContent;
        window.editor.setValue(newContent);
      }
    });
  });
}

export async function renderHtmlToLeftColumn(html, sourceUrl) {
  const host = document.getElementById('html-content');
  if (!host) {
    console.error('html-content not found');
    return;
  }
  const shadow = host.shadowRoot || host.attachShadow({ mode: 'open' });
  const safeHtml = (typeof DOMPurify !== 'undefined')
    ? DOMPurify.sanitize(html)
    : html;
  shadow.innerHTML = safeHtml;
  await ensureShadowStyles(shadow);
  enhanceCodeBlocks(shadow);

  // Track the source URL for resolving relative links
  if (sourceUrl) {
    window.fileViewerSourceUrl = sourceUrl;
  }

  // Push to file viewer history (unless this is a navigation from history)
  if (!window._fileViewerNavigatingFromHistory) {
    // Heuristic: treat .md/.markdown as markdown
    let isMarkdown = false;
    if (sourceUrl) {
      const ext = (sourceUrl.split('.').pop() || '').toLowerCase();
      isMarkdown = ext === 'md' || ext === 'markdown';
    }
    window.fileViewerHistory.push(sourceUrl || '', html, isMarkdown);
  }
  window._fileViewerNavigatingFromHistory = false;

    // Add left-click and right-click behavior to links in file viewer
    shadow.querySelectorAll('a').forEach(link => {
      // Left-click: load linked page into file viewer
      link.addEventListener('click', async e => {
        // Only handle left-click (ignore ctrl/cmd/shift for normal browser behavior)
        if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
        e.preventDefault();
        const baseUrl = window.fileViewerSourceUrl || window.location.href;
        const url = new URL(link.getAttribute('href'), baseUrl).href;
        const tryRender = async (rawText, extGuess) => {
          if (extGuess === 'md' || extGuess === 'markdown') {
            if (window.marked && window.hljs) {
              let md = stripYamlFrontMatter(rawText);
              marked.setOptions({
                highlight: function(code, lang) {
                  const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
                  return hljs.highlight(code, { language: validLang }).value;
                },
                langPrefix: 'hljs language-'
              });
              await renderHtmlToLeftColumn(marked.parse(md), url);
              return;
            }
          }
          await renderHtmlToLeftColumn(rawText, url);
        };
        try {
          // If URL has no extension, try directory indexes
          let ext2 = '';
          let pathname = '';
          try {
            const u = new URL(url, baseUrl);
            pathname = u.pathname;
            const dot = pathname.lastIndexOf('.');
            ext2 = dot >= 0 ? pathname.slice(dot + 1).toLowerCase() : '';
          } catch {}
          if (!ext2) {
            const candidates = [];
            try {
              const base = new URL(url, baseUrl);
              if (!base.pathname.endsWith('/')) base.pathname += '/';
              const idx1 = new URL(base.href); idx1.pathname += 'index.html';
              const idx2 = new URL(base.href); idx2.pathname += 'index.htm';
              candidates.push(idx1.href, idx2.href);
            } catch {}
            for (const c of candidates) {
              try {
                const r = await fetch(c);
                if (r.ok) {
                  const t = await r.text();
                  await tryRender(t, 'html');
                  return;
                }
              } catch {}
            }
            throw new Error('No index.html or index.htm found for directory URL');
          }
          // Normal fetch
          const resp = await fetch(url);
          if (!resp.ok) throw new Error('Failed to fetch: ' + url);
          const text = await resp.text();
          await tryRender(text, ext2);
        } catch (err) {
          alert('Failed to load page in file viewer (site may block cross-origin fetch). Opening in a new tab.\n\nDetails: ' + (err && err.message ? err.message : err));
          try { window.open(url, '_blank'); } catch(_) {}
        }
      });
      // Right-click: context menu
      link.addEventListener('contextmenu', e => {
        e.preventDefault();
        showLinkContextMenu(e, link);
      });
    });
// Wire up file viewer back/forward buttons
window.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('file-viewer-back');
  const fwdBtn = document.getElementById('file-viewer-forward');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window._fileViewerNavigatingFromHistory = true;
      window.fileViewerHistory.go(-1);
    });
  }
  if (fwdBtn) {
    fwdBtn.addEventListener('click', () => {
      window._fileViewerNavigatingFromHistory = true;
      window.fileViewerHistory.go(1);
    });
  }
  window.fileViewerHistory.updateButtons();
});

  // Custom right-click menu for links
  shadow.addEventListener('contextmenu', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    e.preventDefault();

    // Remove any previous menu
    const oldMenu = shadow.querySelector('.custom-context-menu');
    if (oldMenu) oldMenu.remove();

    // Get extension
    let ext = '';
    let baseUrl = window.fileViewerSourceUrl || window.location.href;
    try {
      const urlObj = new URL(link.getAttribute('href'), baseUrl);
      const last = urlObj.pathname.substring(urlObj.pathname.lastIndexOf('/') + 1);
      const dot = last.lastIndexOf('.');
      ext = dot >= 0 ? last.slice(dot + 1).toLowerCase() : '';
    } catch {}

    // Create menu
    const menu = document.createElement('div');
    menu.className = 'custom-context-menu';
    menu.style.position = 'fixed';
    menu.style.zIndex = '9999';
    menu.style.left = e.clientX + 'px';
    menu.style.top = e.clientY + 'px';
    menu.style.background = '#222';
    menu.style.color = '#fff';
    menu.style.border = '1px solid #444';
    menu.style.padding = '0';
    menu.style.borderRadius = '4px';
    menu.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    menu.style.fontSize = '15px';
    menu.style.cursor = 'pointer';
    menu.style.minWidth = '220px';

    function addMenuItem(label, action) {
      const item = document.createElement('div');
      item.textContent = label;
      item.style.padding = '10px 18px';
      item.style.borderBottom = '1px solid #333';
      item.style.userSelect = 'none';
      item.addEventListener('mousedown', async (ev) => {
        ev.preventDefault();
        menu.remove();
        await action();
      });
      item.addEventListener('mouseover', () => { item.style.background = '#444'; });
      item.addEventListener('mouseout', () => { item.style.background = 'none'; });
      menu.appendChild(item);
    }

    // Only show editor options for .js files
    if (ext === 'js') {
      addMenuItem('Open in Current Editor Tab', async () => {
        try {
          const url = new URL(link.getAttribute('href'), baseUrl).href;
          const resp = await fetch(url);
          if (!resp.ok) throw new Error('Failed to fetch: ' + url);
          const text = await resp.text();
          if (window.editorTabs && typeof window.editorTabs.setCurrentFileContent === 'function') {
            window.editorTabs.setCurrentFileContent(text);
            if (typeof window.editorTabs.setCurrentFileName === 'function') {
              let name = url.split('/').pop() || 'untitled';
              window.editorTabs.setCurrentFileName(name);
            }
          }
        } catch (err) {
          alert('Could not open file: ' + err);
        }
      });
      addMenuItem('Open in New Editor Tab', async () => {
        try {
          const url = new URL(link.getAttribute('href'), baseUrl).href;
          const resp = await fetch(url);
          if (!resp.ok) throw new Error('Failed to fetch: ' + url);
          const text = await resp.text();
          let name = url.split('/').pop() || 'untitled';
          if (window.editorTabs && typeof window.editorTabs.openFile === 'function') {
            window.editorTabs.openFile(name, text);
          }
        } catch (err) {
          alert('Could not open file: ' + err);
        }
      });
    }

    // Only show file viewer options for .md and .html files
    if (ext === 'md' || ext === 'markdown' || ext === 'html' || ext === 'htm') {
      addMenuItem('Open in File Viewer', async () => {
        try {
          const url = new URL(link.getAttribute('href'), baseUrl).href;
          const resp = await fetch(url);
          if (!resp.ok) throw new Error('Failed to fetch: ' + url);
          const text = await resp.text();
          if (ext === 'md' || ext === 'markdown') {
            if (window.marked && window.hljs) {
              let md = stripYamlFrontMatter(text);
              marked.setOptions({
                highlight: function(code, lang) {
                  const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
                  return hljs.highlight(code, { language: validLang }).value;
                },
                langPrefix: 'hljs language-'
              });
              await renderHtmlToLeftColumn(marked.parse(md), url);
            }
          } else {
            await renderHtmlToLeftColumn(text, url);
          }
        } catch (err) {
          alert('Could not open file: ' + err);
        }
      });
    }

    // Download link target
    addMenuItem('Download Linked File', async () => {
      try {
        const url = new URL(link.getAttribute('href'), window.location.href).href;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Failed to fetch: ' + url);
        const blob = await resp.blob();
        let name = url.split('/').pop() || 'untitled';
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = name;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          URL.revokeObjectURL(a.href);
          a.remove();
        }, 500);
      } catch (err) {
        alert('Could not download file: ' + err);
      }
    });

    // Open page here (in file viewer)
    addMenuItem('Open Page Here', async () => {
      const url = new URL(link.getAttribute('href'), baseUrl).href;
      const tryRender = async (rawText, extGuess) => {
        if (extGuess === 'md' || extGuess === 'markdown') {
          if (window.marked && window.hljs) {
            let md = stripYamlFrontMatter(rawText);
            marked.setOptions({
              highlight: function(code, lang) {
                const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language: validLang }).value;
              },
              langPrefix: 'hljs language-'
            });
            await renderHtmlToLeftColumn(marked.parse(md), url);
            return;
          }
        }
        await renderHtmlToLeftColumn(rawText, url);
      };

      try {
        // If URL has no extension, try directory indexes
        let ext2 = '';
        let pathname = '';
        try {
          const u = new URL(url, baseUrl);
          pathname = u.pathname;
          const dot = pathname.lastIndexOf('.');
          ext2 = dot >= 0 ? pathname.slice(dot + 1).toLowerCase() : '';
        } catch {}

        if (!ext2) {
          const candidates = [];
          try {
            const base = new URL(url, baseUrl);
            if (!base.pathname.endsWith('/')) base.pathname += '/';
            const idx1 = new URL(base.href); idx1.pathname += 'index.html';
            const idx2 = new URL(base.href); idx2.pathname += 'index.htm';
            candidates.push(idx1.href, idx2.href);
          } catch {}

          for (const c of candidates) {
            try {
              const r = await fetch(c);
              if (r.ok) {
                const t = await r.text();
                await tryRender(t, 'html');
                return;
              }
            } catch {}
          }
          throw new Error('No index.html or index.htm found for directory URL');
        }

        // Normal fetch
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Failed to fetch: ' + url);
        const text = await resp.text();
        await tryRender(text, ext2);
      } catch (err) {
        alert('Failed to load page here (site may block cross-origin fetch). Opening in a new tab.\n\nDetails: ' + (err && err.message ? err.message : err));
        try { window.open(url, '_blank'); } catch(_) {}
      }
    });

    // Open in new browser tab
    addMenuItem('Open in New Browser Tab', async () => {
      window.open(link.href, '_blank');
    });

    // Remove last border
    if (menu.lastChild) menu.lastChild.style.borderBottom = 'none';

    shadow.appendChild(menu);

    // Remove menu on click elsewhere or escape
    function removeMenu(ev) {
      if (ev.type === 'keydown' && ev.key !== 'Escape') return;
      menu.remove();
      shadow.removeEventListener('mousedown', removeMenu, true);
      shadow.removeEventListener('keydown', removeMenu, true);
    }
    setTimeout(() => {
      shadow.addEventListener('mousedown', removeMenu, true);
      shadow.addEventListener('keydown', removeMenu, true);
    }, 0);
  });
}