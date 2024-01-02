// styleManager.js
export default class StyleManager {
  constructor() {
    this.colorSchemes = {
      'Cerulean Lime Crimson': ['#007bff', '#A2C95C', '#F05134'],
      'Royal Emerald Crimson': ['#4169E1', '#2ECC71', '#E74C3C'],
      'Midnight Olive Silver': ['#2F4F4F', '#66A350', '#CCCCCC'],
      'Twitter Teal Light Grey': ['#3498DB', '#38A3A5', '#F1F1F1']
    };
    this.fonts = {
      'Arial': 'Arial, sans-serif',
      'Verdana': 'Verdana, sans-serif'
      // Add more fonts here
    };
  }

  applyFont(fontName) {
    document.body.style.fontFamily = this.fonts[fontName];
  }

  applyColorScheme(schemeName) {
    const colors = this.colorSchemes[schemeName];
    if (colors) {
      document.documentElement.style.setProperty('--primary-color', colors[0]);
      document.documentElement.style.setProperty('--secondary-color', colors[1]);
      document.documentElement.style.setProperty('--accent-color', colors[2]);
    }
  }

  toggleDarkLightMode(isDark) {
    // Add logic to toggle the dark/light mode here
    // This could be as simple as toggling a class on the body element
    if (isDark) {
      document.body.classList.remove('dark-mode');
      this.applyColorScheme('Cerulean Lime Crimson'); // Or any other default light color scheme
    } else {
      document.body.classList.add('dark-mode');
      this.applyColorScheme('Midnight Olive Silver'); // Or any other default dark color scheme
    }
  }

  initUI() {
    const fontSelector = document.getElementById('font-selector');
    const colorSchemeSelector = document.getElementById('color-scheme-selector');

    if (fontSelector) {
      fontSelector.addEventListener('change', (e) => {
        this.applyFont(e.target.value);
      });
    }

    if (colorSchemeSelector) {
      colorSchemeSelector.addEventListener('change', (e) => {
        this.applyColorScheme(e.target.value);
      });
    }

    // Add other UI initialization if needed
  }
}

// Initialize the style manager and UI when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const styleManager = new StyleManager();
  styleManager.initUI();
  // Set default font and color scheme
  styleManager.applyFont('Arial');
  styleManager.applyColorScheme('Cerulean Lime Crimson');
});
