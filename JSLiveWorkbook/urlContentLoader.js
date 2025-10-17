import { stripYamlFrontMatter, getExtensionFromUrl, renderHtmlToLeftColumn, addRecentFile } from './shared.js';

function loadFromUrl(url) {
  console.log('Attempting to load from URL:', url);

  const extension = getExtensionFromUrl(url);
  console.log('Detected extension:', extension);
  // If URL looks like a directory (no extension), attempt index.html / index.htm
  if (!extension) {
    (async () => {
      const tryUrls = [];
      let baseHref = url;
      try {
        const base = new URL(url, window.location.href);
        if (!base.pathname.endsWith('/')) base.pathname += '/';
        baseHref = base.href;
        const idx1 = new URL(base.href);
        idx1.pathname += 'index.html';
        const idx2 = new URL(base.href);
        idx2.pathname += 'index.htm';
        tryUrls.push(idx1.href, idx2.href);
      } catch (_) {}

      for (const candidate of tryUrls) {
        try {
          const resp = await fetch(candidate);
          if (resp.ok) {
            const text = await resp.text();
            await renderHtmlToLeftColumn(text);
            addRecentFile({ type: 'url', url: candidate, name: candidate.split('/').pop() || candidate });
            return;
          }
        } catch (_) {}
      }
      // If fetching index files failed (CORS or not found), fall back to opening in a new tab
      alert('This site does not allow loading its content directly into the viewer. Opening in a new tab.');
      window.open(baseHref, '_blank');
    })();
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(async text => {
      console.log('Fetched text length:', text.length);
      let html;
      if (extension === 'md' || extension === 'markdown') {
        text = stripYamlFrontMatter(text);
        marked.setOptions({
          highlight: function(code, lang) {
            const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language: validLang }).value;
          },
          langPrefix: 'hljs language-'
        });
        html = marked.parse(text);
      } else {
        html = text;
      }

      await renderHtmlToLeftColumn(html);
      addRecentFile({ type: 'url', url: url, name: url.split('/').pop() || url });
    })
    .catch(err => console.error('Failed to load file from URL:', err));
}

// Check for file query parameter on page load
const urlParams = new URLSearchParams(window.location.search);
const fileUrl = urlParams.get('file');
if (fileUrl) {
  console.log('Loading file from URL:', fileUrl);
  loadFromUrl(fileUrl);
}

export { loadFromUrl }; // keep as module