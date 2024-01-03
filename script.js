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

// Export functions if needed
export { clearCookiesAndResetText };
