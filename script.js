// script.js

// Define the default text for each section
const profileTextElements = {
  'header-title': 'John Doe - Consultant',
  'about-me': 'I am a consultant with expertise in...',
  'accomplishments': 'Leading a successful project...',
  'upcoming-events': 'Keynote speech at...',
  'contact-info': 'Contact me for collaborations and consultancy opportunities.'
};

// Function to get a cookie value
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

// Function to clear cookies and reset text content
function clearCookiesAndResetText() {
  Object.keys(profileTextElements).forEach(key => {
    setCookie(key, '', -1);
    const element = document.getElementById(key);
    if (element) {
      element.textContent = profileTextElements[key];
    }
  });
  // Trigger a page refresh to reset styles
  window.location.reload();
}

// Making the clearCookiesAndResetText globally accessible
window.clearCookiesAndResetText = clearCookiesAndResetText;

// Define toggleStyleManagerUI function
window.toggleStyleManagerUI = function(show) {
  const styleManager = document.getElementById('style-manager-ui');
  if (styleManager) {
    styleManager.style.display = show ? 'block' : 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Populate the text content from cookies or use default
  Object.keys(profileTextElements).forEach(key => {
    const element = document.getElementById(key);
    const cookieValue = getCookie(key);
    if (element) {
      element.textContent = cookieValue || profileTextElements[key];
    }
  });

  const clearCookiesButton = document.getElementById("clear-cookies");
  if (clearCookiesButton) {
    clearCookiesButton.addEventListener("click", clearCookiesAndResetText);
  }

  // Add event listeners or other initialization code here if needed
  // ...
});

function toggleMode() {
  const body = document.body;
  const currentMode = body.getAttribute('data-mode');
  if (currentMode === 'dark') {
    body.setAttribute('data-mode', 'light');
  } else {
    body.setAttribute('data-mode', 'dark');
  }
}

// Expose the toggleMode function globally
window.toggleMode = toggleMode;

// Initialize the mode
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved mode in localStorage or default to light
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.setAttribute('data-mode', savedMode);
});

// Save mode to localStorage when it changes
document.body.addEventListener('change', () => {
  localStorage.setItem('mode', document.body.getAttribute('data-mode'));
});

// Export functions if needed
export { clearCookiesAndResetText };

