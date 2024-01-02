// Get references to elements
const fontDropdown = document.getElementById("font-dropdown");
const colorSchemeDropdown = document.getElementById("color-scheme-dropdown");
const clearCookiesButton = document.getElementById("clear-cookies");
const renderButton = document.getElementById("render-button");

// Array to store text elements
let textElements = [];

window.addEventListener("load", initializePage);

function initializePage() {
    extractTextElements();
    populateFontDropdown();
    populateColorSchemeDropdown();
    applyPreferencesFromCookies();
    attachEventListeners();
}

function extractTextElements() {
    textElements = Array.from(document.querySelectorAll("h1, h2, h3, p, span, .logo"));
}


function populateFontDropdown() {
    const fonts = [
        "Roboto", "Open Sans", "Playfair Display", "Poppins", "Nunito",
        "FontAwesome Free Regular", "FontAwesome Brands", "FontAwesome Duotone"
    ];
    populateDropdown(fontDropdown, fonts);
}

function populateColorSchemeDropdown() {
    const colorSchemes = ["light", "dark", "random"];
    populateDropdown(colorSchemeDropdown, colorSchemes);
}

function populateDropdown(dropdown, options) {
    options.forEach(option => {
        const optElement = document.createElement("option");
        optElement.value = option;
        optElement.textContent = option;
        dropdown.appendChild(optElement);
    });
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function deleteCookie(name) {
    setCookie(name, "", -1);
}

function applyPreferencesFromCookies() {
    const fontCookie = getCookie("font");
    const colorSchemeCookie = getCookie("colorScheme");

    if (fontCookie && colorSchemeCookie) {
        applyPreferences(fontCookie, colorSchemeCookie);
    }
}

function applyPreferences(font, colorScheme) {
    textElements.forEach(element => {
        element.style.fontFamily = font;
        document.body.style.backgroundColor = getBackgroundColor(colorScheme);
    });
    setCookie("font", font, 30);
    setCookie("colorScheme", colorScheme, 30);
}

function getBackgroundColor(scheme) {
    return scheme === "light" ? "#FFFFFF" : "#000000"; // Example colors for light and dark
}

function attachEventListeners() {
    clearCookiesButton.addEventListener("click", handleClearCookies);
    renderButton.addEventListener("click", handleRenderClick);
}

function handleClearCookies() {
    deleteCookie("font");
    deleteCookie("colorScheme");
    window.location.reload();
}

function handleRenderClick() {
    const selectedFont = fontDropdown.value;
    const selectedColorScheme = colorSchemeDropdown.value;
    applyPreferences(selectedFont, selectedColorScheme);
}

function getColorBasedOnScheme(scheme) {
    if (scheme === "light") {
        return "#007bff"; // Example light color
    } else if (scheme === "dark") {
        return "#2f4f4f"; // Example dark color
    } else {
        return "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color
    }
}
