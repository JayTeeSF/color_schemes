// styleManager.js
class StyleManager {
  constructor() {
    this.colorSchemes = {
      'Cerulean Lime Crimson': ['#007bff', '#A2C95C', '#F05134'],
      'Royal Emerald Crimson': ['#4169E1', '#2ECC71', '#E74C3C'],
      'Midnight Olive Silver': ['#2F4F4F', '#66A350', '#CCCCCC'],
      'Twitter Teal Light Grey': ['#3498DB', '#38A3A5', '#F1F1F1']
    };
  }

  applyFont(fontName) {
    document.body.style.fontFamily = fontName;
  }

  applyColorScheme(schemeName) {
    let colors = this.colorSchemes[schemeName];
    if(colors) {
      document.documentElement.style.setProperty('--primary-color', colors[0]);
      document.documentElement.style.setProperty('--secondary-color', colors[1]);
      document.documentElement.style.setProperty('--accent-color', colors[2]);
    }
  }

  toggleDarkLightMode(isDark) {
    const body = document.body;
    const darkModeClass = 'dark-mode';

    if (isDark) {
      body.classList.remove(darkModeClass);
      // Apply light color scheme
      this.applyColorScheme('Cerulean Lime Crimson');
    } else {
      body.classList.add(darkModeClass);
      // Apply dark color scheme
      this.applyColorScheme('Midnight Olive Silver');
    }
  }
      initUI() {
        const lightModeButton = document.getElementById('light-mode');
        const darkModeButton = document.getElementById('dark-mode');
        const colorSchemeSelector = document.getElementById('color-scheme-selector');
        const fontSelector = document.getElementById('font-selector');

        lightModeButton.addEventListener('click', () => this.toggleMode('light'));
        darkModeButton.addEventListener('click', () => this.toggleMode('dark'));
        colorSchemeSelector.addEventListener('change', (e) => this.changeColorScheme(e.target.value));
        fontSelector.addEventListener('change', (e) => this.changeFont(e.target.value));
    }
}

const styleManager = new StyleManager();
styleManager.initUI();
export default styleManager;