// styleManager.js
class StyleManager {
  constructor() {
    this.colorSchemes = {
      'Cerulean Lime Crimson': ['#007bff', '#A2C95C', '#F05134'],
      'Royal Emerald Crimson': ['#4169E1', '#2ECC71', '#E74C3C'],
      'Midnight Olive Silver': ['#2F4F4F', '#66A350', '#CCCCCC'],
      'Twitter Teal Light Grey': ['#3498DB', '#38A3A5', '#F1F1F1'],
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
    // this.currentMode = 'light'; // Default to light mode
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

  toggleDarkLightMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Update the colors based on the new mode
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    this.applyColorScheme(mode === 'dark' ? 'Midnight Olive Silver' : 'Cerulean Lime Crimson');
  }

  createDropdownOptions(items, formatter) {
    return Object.entries(items).map(([key, value]) => {
      return formatter(key, value);
    }).join('');
  }

  initUI() {
        const fontSelector = document.getElementById('font-selector');
    const colorSchemeSelector = document.getElementById('color-scheme-selector');
    const modeToggle = document.getElementById('mode-toggle');

    if (fontSelector) {
      fontSelector.innerHTML = this.createDropdownOptions(this.fonts, (fontName, _) => {
        return `<option value="${fontName}">${fontName}</option>`;
      });
      fontSelector.addEventListener('change', (e) => this.applyFont(e.target.value));
    }

    if (colorSchemeSelector) {
      colorSchemeSelector.innerHTML = this.createDropdownOptions(this.colorSchemes, (schemeName, colors) => {
        const colorIndicators = colors.map(color => `<span style="background-color:${color}; width: 1em; height: 1em; display: inline-block;"></span>`).join(' ');
        return `<option value="${schemeName}">${schemeName} ${colorIndicators}</option>`;
      });
      colorSchemeSelector.addEventListener('change', (e) => this.applyColorScheme(e.target.value));
    }

    if (modeToggle) {
      modeToggle.addEventListener('click', () => this.toggleDarkLightMode());
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const styleManager = new StyleManager();
  styleManager.initUI();
  // styleManager.applyFont('Arial');
  // styleManager.applyColorScheme('Ocean Wave');
});

export default new StyleManager();
