// htmlLoader.js - Module to load HTML or MD files into the left column

function stripYamlFrontMatter(text) {
  if (text.startsWith('---')) {
    const endIndex = text.indexOf('---', 3);
    if (endIndex !== -1) {
      return text.substring(endIndex + 3).trim();
    }
  }
  return text;
}

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
        const htmlContent = document.getElementById('html-content');
        // Use shadow DOM to isolate styles
        const shadow = htmlContent.attachShadow({mode: 'open'});
        shadow.innerHTML = html;
        
        // Load Highlight.js CSS into shadow DOM
        fetch('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css')
          .then(response => response.text())
          .then(css => {
            const style = document.createElement('style');
            style.textContent = css;
            shadow.appendChild(style);
          })
          .catch(err => console.error('Failed to load Highlight.js CSS:', err));

        // Load Font Awesome CSS into shadow DOM
        fetch('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css')
          .then(response => response.text())
          .then(css => {
            const style = document.createElement('style');
            style.textContent = css;
            shadow.appendChild(style);
          })
          .catch(err => console.error('Failed to load Font Awesome CSS:', err));
        
      // Add some basic styles for better rendering
      const style = document.createElement('style');
      style.textContent = `
        pre { background: #2d3748; padding: 10px; border-radius: 4px; overflow-x: auto; }
        code { font-family: 'Courier New', monospace; }
        a { color: lightblue; }
      `;
      shadow.appendChild(style);        // Highlight code blocks in the shadow DOM
        const codeBlocks = shadow.querySelectorAll('pre code, code');
        codeBlocks.forEach(block => {
          if (!block.classList.contains('hljs')) {
            hljs.highlightElement(block);
          }
        });

        // Add copy buttons to code blocks
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
            <button class="copy-clipboard" title="copy" style="font-size: 14px; padding: 4px 6px; margin-left: 5px; background: #555; color: #fff; border: none; border-radius: 3px; cursor: pointer;"><i class="fas fa-copy"></i></button>
            <button class="copy-editor" title="paste in editor" style="font-size: 14px; padding: 4px 6px; margin-left: 5px; background: #555; color: #fff; border: none; border-radius: 3px; cursor: pointer;"><i class="fas fa-edit"></i></button>
          `;
          container.appendChild(buttonsDiv);

          // Event listeners
          buttonsDiv.querySelector('.copy-clipboard').addEventListener('click', () => {
            navigator.clipboard.writeText(pre.textContent).then(() => {
              console.log('Code copied to clipboard');
            });
          });
          buttonsDiv.querySelector('.copy-editor').addEventListener('click', () => {
            if (window.editor) {
              window.editor.setValue(pre.textContent);
            }
          });
        });
      } catch (err) {
        console.error('Failed to load file:', err);
      }
    }
    input.remove();
  }, { once: true });
  input.click();
}

document.getElementById('loadHtmlBtn').addEventListener('click', () => {
  loadFile('.html,.htm', (text) => text);
});

document.getElementById('loadMdBtn').addEventListener('click', () => {
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

export {}; // keep as module