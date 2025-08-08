import { createContext, useContext, useState, useEffect } from 'react';

const EditorSettingsContext = createContext();

export const useEditorSettings = () => {
  const context = useContext(EditorSettingsContext);
  if (!context) {
    throw new Error('useEditorSettings must be used within an EditorSettingsProvider');
  }
  return context;
};

export const EditorSettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState('solarized-light');
  const [fontSize, setFontSize] = useState(16);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('editor-theme');
    const savedFontSize = localStorage.getItem('editor-font-size');
    
    if (savedTheme && (savedTheme === 'solarized-light' || savedTheme === 'solarized-dark')) {
      setTheme(savedTheme);
    }
    
    if (savedFontSize) {
      const size = parseInt(savedFontSize, 10);
      if (size >= 12 && size <= 24) {
        setFontSize(size);
      }
    }
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('editor-theme', newTheme);
  };

  const updateFontSize = (newSize) => {
    setFontSize(newSize);
    localStorage.setItem('editor-font-size', newSize.toString());
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const value = {
    theme,
    fontSize,
    isSettingsOpen,
    updateTheme,
    updateFontSize,
    toggleSettings
  };

  return (
    <EditorSettingsContext.Provider value={value}>
      {children}
    </EditorSettingsContext.Provider>
  );
};
