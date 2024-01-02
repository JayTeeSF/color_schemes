// styleManager.js
class StyleManager {
  constructor() {
    this.colorSchemes = {
      'Cerulean Lime Crimson': ['#007bff', '#A2C95C', '#F05134'],
      'Royal Emerald Crimson': ['#4169E1', '#2ECC71', '#E74C3C'],
      'Midnight Olive Silver': ['#2F4F4F', '#66A350', '#CCCCCC'],
      'Twitter Teal Light Grey': ['#3498DB', '#38A3A5', '#F1F1F1']
    };
    this.defaultScheme = 'Cerulean Lime Crimson';
    this.defaultFont = 'Arial';
  }

  applyFont(fontName) {
    document.body.style.fontFamily = fontName || this.defaultFont;
  }

  applyColorScheme(schemeName) {
    let colors = this.colorSchemes[schemeName] || this.colorSchemes[this.defaultScheme];
    document.documentElement.style.setProperty('--primary-color', colors[0]);
    document.documentElement.style.setProperty('--secondary-color', colors[1]);
    document.documentElement.style.setProperty('--accent-color', colors[2]);
  }

  toggleDarkLightMode(isDark) {
    const darkModeColors = { primary: '#000000', secondary: '#2F4F4F', accent: '#F1F1F1' };
    const lightModeColors = { primary: '#FFFFFF', secondary: '#007bff', accent: '#F05134' };
    let colors = isDark ? darkModeColors : lightModeColors;
    document.documentElement.style.setProperty('--primary-bg', colors.primary);
    document.documentElement.style.setProperty('--secondary-bg', colors.secondary);
    document.documentElement.style.setProperty('--accent-bg', colors.accent);
  }
}

export default new StyleManager();
