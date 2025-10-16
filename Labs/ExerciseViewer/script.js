const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  lineNumbers: true,
  theme: "default"
});

// Expose editor globally for other modules (e.g., new.js)
window.editor = editor;

// Focus the editor by default
editor.focus();

// Auto-remove the default placeholder comment line on key down or mouse click
const PLACEHOLDER_PREFIX = "// Write your JS code here";
let placeholderCleared = false;

function clearPlaceholderIfPresent(cm) {
  if (placeholderCleared) return;
  const firstLine = cm.getLine(0) || "";
  if (firstLine.indexOf(PLACEHOLDER_PREFIX) === 0) {
    cm.operation(() => {
      // Remove the first line (the placeholder comment) only
      cm.replaceRange("", { line: 0, ch: 0 }, { line: 1, ch: 0 });
    });
    placeholderCleared = true;
  }
}

// Trigger on key down or mouse click in the editor
editor.on("keydown", (cm, event) => {
  if (!placeholderCleared) {
    clearPlaceholderIfPresent(cm);
  }
});

editor.on("mousedown", (cm, event) => {
  if (!placeholderCleared) {
    clearPlaceholderIfPresent(cm);
  }
});

// Global variables to store original console methods
let originalLog = null;
let originalError = null;

function setupConsole() {
  const output = document.getElementById("console");
  output.textContent = "";

  if (!originalLog) originalLog = console.log;
  if (!originalError) originalError = console.error;

  console.log = function(...args) {
    originalLog(...args);
    output.textContent += args.join(" ") + "\n";
  };

  console.error = function(...args) {
    originalError(...args);
    output.textContent += "Error: " + args.join(" ") + "\n";
  };
}

function runCode() {
  setupConsole();
  const code = editor.getValue();
  try {
    new Function(code)();
  } catch (e) {
    console.error(e);
  }
}

function clearConsole() {
  const output = document.getElementById("console");
  output.textContent = "";
  // Reset console to original methods
  if (originalLog) console.log = originalLog;
  if (originalError) console.error = originalError;
}

function clearEditor() {
  editor.setValue('');
}

// Ensure the functions are accessible from inline onclick in HTML
window.runCode = runCode;
window.clearConsole = clearConsole;
window.clearEditor = clearEditor;