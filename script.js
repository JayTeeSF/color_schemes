// script.js
document.addEventListener('DOMContentLoaded', () => {
    const fontDropdown = document.getElementById("font-dropdown");
    const colorSchemeDropdown = document.getElementById("color-scheme-dropdown");
    const clearCookiesButton = document.getElementById("clear-cookies");
    const renderButton = document.getElementById("render-button");

    renderButton.addEventListener("click", () => {
        const selectedFont = fontDropdown.value;
        const selectedColorScheme = colorSchemeDropdown.value;
        applyPreferences(selectedFont, selectedColorScheme);
    });

    clearCookiesButton.addEventListener("click", clearCookies);
});

function applyPreferences(font, colorScheme) {
    document.body.style.fontFamily = font;
    applyColorScheme(colorScheme);
}

function applyColorScheme(scheme) {
    let colors = {
        light: {
            primary: "#007bff",
            secondary: "#A2C95C",
            accent: "#F05134"
        },
        dark: {
            primary: "#2F4F4F",
            secondary: "#66A350",
            accent: "#F1F1F1"
        }
    };

    let schemeColors = colors[scheme];
    
    document.documentElement.style.setProperty('--primary-color', schemeColors.primary);
    document.documentElement.style.setProperty('--secondary-color', schemeColors.secondary);
    document.documentElement.style.setProperty('--accent-color', schemeColors.accent);
}

function clearCookies() {
    // Implement cookie deletion logic here
    console.log("Cookies cleared. Implement deletion logic.");
}
