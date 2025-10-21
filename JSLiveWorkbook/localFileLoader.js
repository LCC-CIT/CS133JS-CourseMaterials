// htmlLoader.js - Module to load HTML or MD files into the left column

import { stripYamlFrontMatter, renderHtmlToLeftColumn, addRecentFile } from './shared.js';

function loadFile(accept, processText) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = accept;
  input.style.display = 'none';
  document.body.appendChild(input);
  input.addEventListener('change', async () => {
    const file = input.files[0];
    if (file) {
      try {
        const text = await file.text();
        const html = processText(text);
        await renderHtmlToLeftColumn(html);
        addRecentFile({ type: 'local', name: file.name });
      } catch (err) {
        console.error('Failed to load file:', err);
      }
    }
    input.remove();
  }, { once: true });
  input.click();
}

// Menu wiring for File Viewer -> Open HTML / Open Markdown
function attachMenuListeners() {
  const menuOpenHtml = document.getElementById('menu-open-html');
  if (menuOpenHtml) {
    menuOpenHtml.addEventListener('click', () => {
      loadFile('.html,.htm', (text) => text);
    });
  }

  const menuOpenMd = document.getElementById('menu-open-md');
  if (menuOpenMd) {
    menuOpenMd.addEventListener('click', () => {
      loadFile('.md', (text) => {
        text = stripYamlFrontMatter(text);
        marked.setOptions({
          highlight: function(code, lang) {
            const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language: validLang }).value;
          },
          langPrefix: 'hljs language-'
        });
        return marked.parse(text);
      });
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachMenuListeners, { once: true });
} else {
  attachMenuListeners();
}export {}; // keep as module