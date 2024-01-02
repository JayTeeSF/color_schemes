// Get references to elements
const fontDropdown = document.getElementById("font-dropdown");
const colorSchemeDropdown = document.getElementById("color-scheme-dropdown");
const clearCookiesButton = document.getElementById("clear-cookies");

// Array to store text elements
const textElements = [];

// Function to extract text elements
function extractTextElements() {
  const textElements = document.querySelectorAll("p, h1, h2, h3, span");
  textElements.forEach(element => {
    // Store text content and element reference in the array
    this.textElements.push({
      content: element.textContent,
      element: element
    });
  });
}

// Function to check cookies
function checkCookies() {
  const fontCookie = getCookie("font");
  const colorSchemeCookie = getCookie("colorScheme");

  if (fontCookie && colorSchemeCookie) {
    applyPreferences(fontCookie, colorSchemeCookie);
  } else {
    promptUserSelection();
  }
}

// Function to prompt user for selections
function promptUserSelection() {
  // Display prompts using browser prompts or a custom modal
  const selectedFont = prompt("Choose a font:", fontDropdown.value);
  const selectedColorScheme = prompt("Choose a color scheme (light, dark, or random):", colorSchemeDropdown.value);

  if (selectedFont && selectedColorScheme) {
    applyPreferences(selectedFont, selectedColorScheme);
  } else {
    // Handle cases where user cancels prompts
  }
}

// Function to apply preferences
function applyPreferences(font, colorScheme) {
  // Set font and color scheme for text elements
  textElements.forEach(element => {
    element.element.style.fontFamily = font;
    element.element.style.color = getColor(colorScheme);
  });

  // Set cookies for preferences
  setCookie("font", font, 30);
  setCookie("colorScheme", colorScheme, 30);
}

// Function to get color based on color scheme
function getColor(colorScheme) {
  if (colorScheme === "light") {
    return "#007bff"; // Example light color
  } else if (colorScheme === "dark") {
    return "#2f4f4f"; // Example dark color
  } else {
    return "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color
  }
}

// Function to handle clear cookies button
clearCookiesButton.addEventListener("click", () => {
  deleteCookie("font");
  deleteCookie("colorScheme");
  location.reload();
});

// Function to handle hover events
function handleHover(element) {
  const tooltip = createTooltip(`Font: ${element.element.style.fontFamily}\nColor: ${element.element.style.color}`);
  element.element.appendChild(tooltip);
}

// Function to create tooltip
function createTooltip(content) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = content;
  return tooltip;
}

// Initialize
extractTextElements();
checkCookies();

// Add hover event listeners to text elements
textElements.forEach(element => {
  element.element.addEventListener("mouseover", () => handleHover(element));
  element.element.addEventListener("mouseout", () => {
    element.element.querySelector(".tooltip").remove();
  });
});

JavaScript
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
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
