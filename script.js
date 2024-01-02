// script.js
document.addEventListener('DOMContentLoaded', () => {
    const fontDropdown = document.getElementById("font-dropdown");
    const colorSchemeDropdown = document.getElementById("color-scheme-dropdown");
    const clearCookiesButton = document.getElementById("clear-cookies");
    const renderButton = document.getElementById("render-button");

    populateFontDropdown();
    populateColorSchemeDropdown();

    renderButton.addEventListener("click", () => {
        const selectedFont = fontDropdown.value;
        const selectedColorScheme = colorSchemeDropdown.value;
        applyPreferences(selectedFont, selectedColorScheme);
    });

    clearCookiesButton.addEventListener("click", clearCookies);
});

function populateFontDropdown() {
    const fonts = ["Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Brush Script MT"];
    fonts.forEach(font => {
        let option = new Option(font, font);
        fontDropdown.add(option);
    });
}

function populateColorSchemeDropdown() {
    const colorSchemes = {
        'Cerulean Lime Crimson': ['#007bff', '#A2C95C', '#F05134'],
        'Royal Emerald Crimson': ['#4169E1', '#2ECC71', '#E74C3C'],
        'Midnight Olive Silver': ['#2F4F4F', '#66A350', '#CCCCCC'],
        'Twitter Teal Light Grey': ['#3498DB', '#38A3A5', '#F1F1F1']
    };

    Object.keys(colorSchemes).forEach(scheme => {
        let option = new Option(scheme, scheme);
        colorSchemeDropdown.add(option);
    });
}

function applyPreferences(font, colorScheme) {
    document.body.style.fontFamily = font;
    applyColorScheme(colorScheme);
}

function applyColorScheme(scheme) {
    const colorSchemes = {
        'Cerulean Lime Crimson': ['#007bff', '#A2C95C', '#F05134'],
        'Royal Emerald Crimson': ['#4169E1', '#2ECC71', '#E74C3C'],
        'Midnight Olive Silver': ['#2F4F4F', '#66A350', '#CCCCCC'],
        'Twitter Teal Light Grey': ['#3498DB', '#38A3A5', '#F1F1F1']
    };

    let colors = colorSchemes[scheme];
    
    if(colors) {
        document.documentElement.style.setProperty('--primary-color', colors[0]);
        document.documentElement.style.setProperty('--secondary-color', colors[1]);
        document.documentElement.style.setProperty('--accent-color', colors[2]);
    }
}

function clearCookies() {
    // Implement cookie deletion logic here
    console.log("Cookies cleared. Implement deletion logic.");
}
