import React, { useEffect, useRef } from 'react';
import styles from './customAceEditor.module.scss';
import { useEditorSettings } from '../../Contexts/EditorSettingsContext';

// Lightweight replacement for the original CustomAceEditor component.
// Respects editor settings (theme, fontSize) from EditorSettingsContext.
const CustomAceEditor = ({ editorValue = '', setEditorValue = () => {}, setAnnotations = () => {}, readOnlyMode = false }) => {
  const { theme, fontSize } = useEditorSettings();
  const textareaRef = useRef(null);

  useEffect(() => {
    // Basic lint: if content is valid JSON, clear annotations; otherwise provide a simple message
    try {
      JSON.parse(editorValue);
      setAnnotations([]);
    } catch (e) {
      const msg = e && e.message ? e.message : 'Invalid JSON';
      // Try to extract a position (V8 error messages like "Unexpected token x in JSON at position 10")
      const mPos = msg.match(/position (\d+)/i);
      let row = 0, column = 0;
      if (mPos) {
        const pos = parseInt(mPos[1], 10);
        const upto = editorValue.slice(0, pos);
        row = (upto.match(/\n/g) || []).length;
        const lastNewline = upto.lastIndexOf('\n');
        column = lastNewline === -1 ? pos : pos - lastNewline - 1;
      }
      setAnnotations([{ row, column, text: msg, type: 'error' }]);
    }
  }, [editorValue, setAnnotations]);

  // Auto-indent on Enter and format shortcut (Ctrl/Cmd+Shift+F)
  const onKeyDown = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Auto-indent: when Enter is pressed, copy previous line's leading whitespace
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
      const start = textarea.selectionStart;
      const value = textarea.value;
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const prevLineStart = value.lastIndexOf('\n', lineStart - 2) + 1;
      const prevLine = value.slice(prevLineStart, lineStart);
      const indentMatch = prevLine.match(/^\s*/);
      const indent = indentMatch ? indentMatch[0] : '';

      e.preventDefault();
      const insert = '\n' + indent;
      const newValue = value.slice(0, start) + insert + value.slice(textarea.selectionEnd);
      setEditorValue(newValue);
      const newPos = start + insert.length;
      // Restore caret position after state update
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = newPos;
      }, 0);
      return;
    }

    // Ctrl/Cmd+Shift+F => format (pretty-print) JSON
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'F' || e.key === 'f')) {
      e.preventDefault();
      try {
        const parsed = JSON.parse(textarea.value);
        const formatted = JSON.stringify(parsed, null, 2);
        setEditorValue(formatted);
      } catch (_) {
        // ignore formatting if invalid JSON
      }
    }
  };

  const bg = theme === 'solarized-light' ? '#fdf6e3' : '#002b36';
  const color = theme === 'solarized-light' ? '#586e75' : '#839496';

  return (
    <div className={styles.container}>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        value={editorValue}
        onChange={(e) => setEditorValue(e.target.value)}
        onKeyDown={onKeyDown}
        readOnly={!!readOnlyMode}
        spellCheck={false}
        aria-label="JSON editor"
        style={{ fontSize: `${fontSize}px`, backgroundColor: bg, color, tabSize: 2 }}
      />
      <div className={styles.hint}>Tip: Press Ctrl/Cmd+Shift+F to format JSON. Enter auto-indents based on previous line.</div>
    </div>
  );
};

export default CustomAceEditor;
