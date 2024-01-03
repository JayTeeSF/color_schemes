// styleManager.js
class StyleManager {
  constructor() {
    this.colorSchemes = {
      'Cerulean Lime Crimson': ['#007bff', '#A2C95C', '#F05134', '#ffffff', '#282c34', '#ffffff', '#1c1e26'],
      'Royal Emerald Crimson': ['#4169E1', '#2ECC71', '#E74C3C', '#ffffff', '#282c34', '#ffffff', '#1c1e26'],
      'Midnight Olive Silver': ['#2F4F4F', '#66A350', '#CCCCCC', '#ffffff', '#282c34', '#ffffff', '#1c1e26'],
      'Twitter Teal Light Grey': ['#3498DB', '#38A3A5', '#F1F1F1', '#ffffff', '#282c34', '#ffffff', '#1c1e26'],
      'Ocean Wave': ['#00577B', '#A6D6D6', '#C1E7E3', '#ffffff', '#282c34', '#ffffff', '#1c1e26'],
      'Sunset Boulevard': ['#FF5E5B', '#D8D8D8', '#FFFFEA', '#ffffff', '#282c34', '#ffffff', '#1c1e26'],
      'Forest Hike': ['#5D4157', '#A8CABA', '#E6EBE0', '#ffffff', '#282c34', '#ffffff', '#1c1e26'],
      'Desert Sand': ['#EDC9AF', '#F7E4BE', '#F4E9CD', '#ffffff', '#282c34', '#ffffff', '#1c1e26'],
      // Additional color schemes go here
    };
    this.fonts = {
      'Arial': 'Arial, sans-serif',
      'Verdana': 'Verdana, sans-serif',
      'Georgia': 'Georgia, serif',
      'Palatino Linotype': '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      'Times New Roman': '"Times New Roman", Times, serif',
      // Additional fonts go here
    };
    this.currentMode = 'light'; // Default to light mode
  }

  applyFont(fontName) {
    document.body.style.fontFamily = this.fonts[fontName];
  }

  applyColorScheme(schemeName) {
    const colors = this.colorSchemes[schemeName];
    document.documentElement.style.setProperty('--primary-color', colors[0]);
    document.documentElement.style.setProperty('--secondary-color', colors[1]);
    document.documentElement.style.setProperty('--accent-color', colors[2]);
    document.documentElement.style.setProperty('--background-color', colors[3]);
    document.documentElement.style.setProperty('--text-color', colors[5]);
    document.documentElement.style.setProperty('--primary-text-color', colors[0]); // Assuming first color is what you want for text.
  }

  // Inside StyleManager class

  toggleDarkLightMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';

    // Set the appropriate background color based on the mode
    const backgroundColor = mode === 'dark' ? this.colorSchemes[this.currentScheme][4] : this.colorSchemes[this.currentScheme][3];
    document.documentElement.style.setProperty('--background-color', backgroundColor);

    // Update the text color for the mode
    const textColor = mode === 'dark' ? this.colorSchemes[this.currentScheme][6] : this.colorSchemes[this.currentScheme][5];
    document.documentElement.style.setProperty('--text-color', textColor);
  }

  createDropdownOptions(items, formatter) {
    return Object.entries(items).map(([key, value]) => {
      return formatter(key, value);
    }).join('');
  }

  createColorSchemeOptions() {
    return Object.entries(this.colorSchemes).map(([schemeName, colors]) => {
      // Create color indicators with inline styling for size and display
      const colorIndicators = colors.slice(0, 3).map(color => `<span style="background-color:${color}; width: 20px; height: 20px; display: inline-block; margin: 0 5px;"></span>`).join('');
      return `<option value="${schemeName}">${schemeName} ${colorIndicators}</option>`;
    }).join('');
  }

  initUI() {
    const fontSelector = document.getElementById('font-selector');
    const colorSchemeSelector = document.getElementById('color-scheme-selector');
    const modeToggle = document.getElementById('mode-toggle');

    if (fontSelector) {
      fontSelector.innerHTML = this.createDropdownOptions(this.fonts, (fontName) => {
        return `<option value="${fontName}">${fontName}</option>`;
      });
      fontSelector.addEventListener('change', (e) => this.applyFont(e.target.value));
    }

    if (colorSchemeSelector) {
      colorSchemeSelector.innerHTML = this.createColorSchemeOptions();
      colorSchemeSelector.addEventListener('change', (e) => this.applyColorScheme(e.target.value));
    }

    if (modeToggle) {
      modeToggle.addEventListener('click', () => this.toggleDarkLightMode());
    }
  }
}

// Create an instance of StyleManager and initialize the UI after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  const styleManager = new StyleManager();
  styleManager.initUI();
  // Set the default font and color scheme on initial load
  styleManager.applyFont('Open Sans');
  styleManager.applyColorScheme('Cerulean Lime Crimson');
});

export default new StyleManager();

