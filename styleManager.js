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
      'Desert Sand': ['#EDC9AF', '#F7E4BE', '#F4E9CD', '#ffffff', '#282c34', '#ffffff', '#1c1e26']
    };

    this.fonts = {
      'Arial': 'Arial, sans-serif',
      'Verdana': 'Verdana, sans-serif',
      'Georgia': 'Georgia, serif',
      'Palatino Linotype': '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      'Times New Roman': '"Times New Roman", Times, serif'
    };

    // Automatically bind methods
    this.initUI = this.initUI.bind(this);
    this.applyFont = this.applyFont.bind(this);
    this.applyColorScheme = this.applyColorScheme.bind(this);
    this.toggleDarkLightMode = this.toggleDarkLightMode.bind(this);

    this.currentScheme = 'Cerulean Lime Crimson';
    this.currentFont = 'Verdana';
  }

  applyFont(fontName) {
    this.currentFont = fontName;
    // Apply the selected font to the body
    document.body.style.fontFamily = this.fonts[fontName];
  }

  applyColorScheme(schemeName) {
    const colors = this.colorSchemes[schemeName];
    this.currentScheme = schemeName;

    document.documentElement.style.setProperty('--primary-color', colors[0]);
    document.documentElement.style.setProperty('--secondary-color', colors[1]);
    document.documentElement.style.setProperty('--accent-color', colors[2]);
    document.documentElement.style.setProperty('--background-color', colors[3]);
    document.documentElement.style.setProperty('--text-color', colors[5]);
  }

  toggleDarkLightMode() {
    // Toggle the dark/light mode of the page
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    const modeColors = isDarkMode ? this.colorSchemes['Midnight Olive Silver'] : this.colorSchemes[this.currentScheme];
    this.applyColorScheme(this.currentScheme);
    document.body.style.backgroundColor = modeColors[3];
    document.body.style.color = modeColors[5];
  }

  initUI() {
    const fontDropdown = document.getElementById('font-dropdown');
    Object.keys(this.fonts).forEach(font => {
      const option = document.createElement('option');
      option.value = font;
      option.textContent = font;
      fontDropdown.appendChild(option);
    });
    fontDropdown.addEventListener('change', (e) => {
      this.applyFont(e.target.value);
    });

    const modeToggle = document.getElementById('mode-toggle');
    Object.keys(this.colorSchemes).forEach(scheme => {
      const option = document.createElement('option');
      option.value = scheme;
      option.textContent = scheme;
      colorSchemeDropdown.appendChild(option);
    });
    colorSchemeDropdown.addEventListener('change', (e) => {
      this.applyColorScheme(e.target.value);
    });

    // Set up the toggle button for dark/light mode
    modeToggle.addEventListener('click', this.toggleDarkLightMode);

    // Apply the initial font and color scheme
    this.applyFont(this.currentFont);
    this.applyColorScheme(this.currentScheme);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const styleManager = new StyleManager();
  styleManager.initUI();
  //styleManager.applyColorScheme(styleManager.currentScheme);
  //styleManager.applyFont(styleManager.currentFont);
  //styleManager.applyColorScheme('Cerulean Lime Crimson'); // Default color scheme
  //styleManager.applyFont('Verdana'); // Default font
});
