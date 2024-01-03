// styleManager.js
class StyleManager {
  constructor() {
    this.colorSchemes = {
      // Additional color schemes can be added here
      'Cerulean Lime Crimson': ['#007bff', '#A2C95C', '#F05134', '#ffffff', '#242424', '#ffffff', '#000000'],
      'Royal Emerald Crimson': ['#4169E1', '#2ECC71', '#E74C3C', '#f0f0f0', '#333333', '#000000', '#ffffff'],
      'Midnight Olive Silver': ['#2F4F4F', '#66A350', '#CCCCCC', '#272727', '#eaeaea', '#ffffff', '#000000'],
      'Twitter Teal Light Grey': ['#3498DB', '#38A3A5', '#F1F1F1', '#dddddd', '#222222', '#ffffff', '#000000'],
      'Ocean Wave': ['#00577B', '#A6D6D6', '#C1E7E3'],
      'Sunset Boulevard': ['#FF5E5B', '#D8D8D8', '#FFFFEA'],
      'Forest Hike': ['#5D4157', '#A8CABA', '#E6EBE0'],
      'Desert Sand': ['#EDC9AF', '#F7E4BE', '#F4E9CD']
    };
    this.fonts = {
      'Arial': 'Arial, sans-serif',
      'Verdana': 'Verdana, sans-serif',
      'Georgia': 'Georgia, serif',
      'Palatino Linotype': '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      'Times New Roman': '"Times New Roman", Times, serif'
    };
    this.currentMode = 'light';
  }

  applyFont(fontName) {
    document.body.style.fontFamily = this.fonts[fontName];
  }

  applyColorScheme(schemeName) {
    const colors = this.colorSchemes[schemeName];
    document.documentElement.style.setProperty('--primary-color', colors[0]);
    document.documentElement.style.setProperty('--secondary-color', colors[1]);
    document.documentElement.style.setProperty('--accent-color', colors[2]);
    document.documentElement.style.setProperty('--background-color', this.currentMode === 'light' ? colors[3] : colors[4]);
    document.documentElement.style.setProperty('--text-color', this.currentMode === 'light' ? colors[5] : colors[6]);
  }

  toggleDarkLightMode() {
    this.currentMode = this.currentMode === 'light' ? 'dark' : 'light';
    this.applyColorScheme(document.getElementById('color-scheme-selector').value);
  }

  createDropdownOptions(items, formatter) {
    return Object.entries(items).map(([key, value]) => formatter(key, value)).join('');
  }

  createColorSchemeOptions() {
    return this.createDropdownOptions(this.colorSchemes, (schemeName, colors) => {
      const colorIndicators = colors.slice(0, 3).map(color => 
        `<span class="color-indicator" style="background-color:${color};"></span>`
      ).join('');
      return `<option value="${schemeName}">${schemeName} ${colorIndicators}</option>`;
    });
  }

  createFontOptions() {
    return this.createDropdownOptions(this.fonts, (fontName) => 
      `<option value="${fontName}">${fontName}</option>`
    );
  }

  initUI() {
    const fontSelector = document.getElementById('font-selector');
    const colorSchemeSelector = document.getElementById('color-scheme-selector');
    const modeToggle = document.getElementById('mode-toggle');

    if (fontSelector && colorSchemeSelector && modeToggle) {
      fontSelector.innerHTML = this.createFontOptions();
      colorSchemeSelector.innerHTML = this.createColorSchemeOptions();

      fontSelector.addEventListener('change', (e) => this.applyFont(e.target.value));
      colorSchemeSelector.addEventListener('change', (e) => this.applyColorScheme(e.target.value));
      modeToggle.addEventListener('click', () => this.toggleDarkLightMode());
    } else {
      console.error('UI elements not found');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const styleManager = new StyleManager();
  styleManager.initUI();
  styleManager.applyFont('Arial');
  styleManager.applyColorScheme('Cerulean Lime Crimson');
});

export default new StyleManager();
