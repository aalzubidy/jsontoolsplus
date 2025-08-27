import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './customAceEditor.module.scss';
import { useEditorSettings } from '../../Contexts/EditorSettingsContext';

// Static imports of CodeMirror extensions to avoid multiple instances of @codemirror/state
import { json } from '@codemirror/lang-json';
import { autocompletion } from '@codemirror/autocomplete';

// Load react-codemirror client-side only
const CodeMirror = dynamic(() => import('@uiw/react-codemirror'), { ssr: false });

const DEFAULT_HEIGHT_PX = 480; // matches CSS comment; change here if you prefer

const CustomAceEditor = ({ editorValue = '', setEditorValue = () => {}, setAnnotations = () => {}, readOnlyMode = false }) => {
  const { theme, fontSize } = useEditorSettings();
  const editorRef = useRef(null);

  // Use a stable extensions array built from the statically imported extensions
  const extensions = [json(), autocompletion()];

  useEffect(() => {
    // Basic lint: if content is valid JSON, clear annotations; otherwise provide a simple message
    try {
      JSON.parse(editorValue);
      setAnnotations([]);
    } catch (e) {
      const msg = e && e.message ? e.message : 'Invalid JSON';
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

  // Formatting shortcut handled at the wrapper level (Ctrl/Cmd+Shift+F)
  const onKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'F' || e.key === 'f')) {
      e.preventDefault();
      try {
        const parsed = JSON.parse(editorValue);
        const formatted = JSON.stringify(parsed, null, 2);
        setEditorValue(formatted);
      } catch (_) {
        // ignore if invalid
      }
    }
  };

  const themeClass = theme === 'solarized-light' ? styles.light : styles.dark;

  return (
    <div className={`${styles.container} ${themeClass}`} onKeyDown={onKeyDown}>
      <CodeMirror
        ref={editorRef}
        value={editorValue}
        height={`${DEFAULT_HEIGHT_PX}px`}
        theme={theme === 'solarized-light' ? 'light' : 'dark'}
        extensions={extensions}
        onChange={(value) => setEditorValue(value)}
        editable={!readOnlyMode}
        basicSetup={{ foldGutter: false }}
        style={{ fontSize: `${fontSize}px`, color: theme === 'solarized-light' ? '#586e75' : '#839496' }}
        className={styles.editor}
      />
    </div>
  );
};

export default CustomAceEditor;
