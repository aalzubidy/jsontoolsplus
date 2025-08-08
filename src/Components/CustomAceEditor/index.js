import { Editor } from '@monaco-editor/react';
import { useState, useEffect } from 'react';
import { useEditorSettings } from '../../Contexts/EditorSettingsContext';

const CustomAceEditor = (props) => {
  const { editorValue, setEditorValue, setAnnotations, readOnlyMode } = props;
  const [isEditorReady, setIsEditorReady] = useState(false);
  const { theme, fontSize } = useEditorSettings();

  const handleOnChange = (newValue) => {
    if (setEditorValue) setEditorValue(newValue || '');
  }

  const handleEditorDidMount = (editor, monaco) => {
    // Define Solarized Light theme FIRST
    monaco.editor.defineTheme('solarized-light', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: '', foreground: '586e75', background: 'fdf6e3' },
        { token: 'comment', foreground: '93a1a1', fontStyle: 'italic' },
        { token: 'keyword', foreground: '859900' },
        { token: 'string', foreground: '2aa198' },
        { token: 'number', foreground: 'd33682' },
        { token: 'delimiter', foreground: '586e75' },
        { token: 'type', foreground: 'b58900' },
        { token: 'identifier', foreground: '268bd2' }
      ],
      colors: {
        'editor.background': '#fdf6e3',
        'editor.foreground': '#586e75',
        'editor.lineHighlightBackground': '#eee8d5',
        'editor.selectionBackground': '#073642',
        'editorCursor.foreground': '#586e75',
        'editorLineNumber.foreground': '#93a1a1',
        'editorGutter.background': '#eee8d5',
        'editorWhitespace.foreground': '#93a1a1'
      }
    });

    // Define Solarized Dark theme
    monaco.editor.defineTheme('solarized-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: '', foreground: '839496', background: '002b36' },
        { token: 'comment', foreground: '586e75', fontStyle: 'italic' },
        { token: 'keyword', foreground: '859900' },
        { token: 'string', foreground: '2aa198' },
        { token: 'number', foreground: 'd33682' },
        { token: 'delimiter', foreground: '839496' },
        { token: 'type', foreground: 'b58900' },
        { token: 'identifier', foreground: '268bd2' }
      ],
      colors: {
        'editor.background': '#002b36',
        'editor.foreground': '#839496',
        'editor.lineHighlightBackground': '#073642',
        'editor.selectionBackground': '#073642',
        'editorCursor.foreground': '#839496',
        'editorLineNumber.foreground': '#586e75',
        'editorGutter.background': '#073642',
        'editorWhitespace.foreground': '#586e75'
      }
    });

    // Apply the current theme immediately
    monaco.editor.setTheme(theme);
    
    setIsEditorReady(true);

    // Configure JSON validation
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: []
    });

    // Listen for validation markers (errors)
    const model = editor.getModel();
    if (model && setAnnotations) {
      const updateAnnotations = () => {
        const markers = monaco.editor.getModelMarkers({ resource: model.uri });
        const annotations = markers.map(marker => ({
          row: marker.startLineNumber - 1,
          column: marker.startColumn - 1,
          text: marker.message,
          type: marker.severity === 8 ? 'error' : 'warning'
        }));
        setAnnotations(annotations);
      };

      // Initial check
      updateAnnotations();
      
      // Listen for changes
      model.onDidChangeContent(updateAnnotations);
    }
  };

  return (
    <div style={{ 
      height: '56vh', 
      border: `1px solid ${theme === 'solarized-dark' ? '#073642' : '#eee8d5'}`, 
      borderRadius: '4px', 
      overflow: 'hidden' 
    }}>
      <Editor
        height="56vh"
        width="100%"
        language="json"
        theme={theme}
        value={editorValue || ''}
        onChange={handleOnChange}
        onMount={handleEditorDidMount}
        loading={
          <div style={{
            height: '56vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme === 'solarized-dark' ? '#002b36' : '#fdf6e3',
            color: theme === 'solarized-dark' ? '#839496' : '#586e75',
            fontSize: '14px'
          }}>
            Loading editor...
          </div>
        }
        options={{
          readOnly: readOnlyMode || false,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: fontSize,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollbar: {
            vertical: 'auto',
            horizontal: 'auto',
            useShadows: false,
            verticalHasArrows: true,
            horizontalHasArrows: true,
          },
          tabSize: 2,
          insertSpaces: true,
          wordWrap: 'on',
          automaticLayout: true,
          formatOnPaste: true,
          formatOnType: true,
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: 'on',
          quickSuggestions: true,
          contextmenu: true,
          mouseWheelZoom: true,
          cursorStyle: 'line',
          renderLineHighlight: 'line',
          selectionHighlight: true,
          folding: true,
          foldingStrategy: 'indentation',
          showFoldingControls: 'always',
          bracketPairColorization: { enabled: true }
        }}
      />
    </div>
  );
};

export default CustomAceEditor;
