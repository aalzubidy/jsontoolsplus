import { useEditorSettings } from '../../Contexts/EditorSettingsContext';
import styles from './settingsModal.module.scss';

const SettingsModal = () => {
  const { theme, fontSize, isSettingsOpen, updateTheme, updateFontSize, toggleSettings } = useEditorSettings();

  if (!isSettingsOpen) return null;

  const handleThemeChange = (e) => {
    updateTheme(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    updateFontSize(parseInt(e.target.value, 10));
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={styles.backdrop}
        onClick={toggleSettings}
      />
      
      {/* Modal */}
      <div className={styles.modal}>
        <div className={styles.header}>
          <h5>Editor Settings</h5>
          <button 
            className={styles.closeButton}
            onClick={toggleSettings}
            title="Close"
          >
            ×
          </button>
        </div>
        
        <div className={styles.content}>
          {/* Theme Setting */}
          <div className={styles.setting}>
            <label className={styles.label}>Theme</label>
            <select 
              value={theme} 
              onChange={handleThemeChange}
              className={styles.select}
            >
              <option value="solarized-light">Solarized Light</option>
              <option value="solarized-dark">Solarized Dark</option>
            </select>
          </div>

          {/* Font Size Setting */}
          <div className={styles.setting}>
            <label className={styles.label}>Font Size</label>
            <div className={styles.fontSizeContainer}>
              <input
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={handleFontSizeChange}
                className={styles.slider}
              />
              <span className={styles.fontSizeValue}>{fontSize}px</span>
            </div>
          </div>

          {/* Preview */}
          <div className={styles.setting}>
            <label className={styles.label}>Preview</label>
            <div 
              className={styles.preview}
              style={{
                fontSize: `${fontSize}px`,
                backgroundColor: theme === 'solarized-light' ? '#fdf6e3' : '#002b36',
                color: theme === 'solarized-light' ? '#586e75' : '#839496',
              }}
            >
              {`{ "example": "JSON text" }`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
