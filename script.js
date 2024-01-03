// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Define elements for text content that may be editable by the user
  const profileTextElements = {
    'header-title': 'John Doe - Consultant',
    'about-me': 'I am a consultant with expertise in...',
    'accomplishments': 'Leading a successful project...',
    'upcoming-events': 'Keynote speech at...',
    'contact-info': 'Contact me for collaborations and consultancy opportunities.'
  };

  // Populate the text content from the data structure or cookies
  Object.keys(profileTextElements).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      const cookieValue = getCookie(id);
      element.textContent = cookieValue || profileTextElements[id];
    }
  });

  // Button to clear cookies and reset text content
  const clearCookiesButton = document.getElementById("clear-cookies");
  clearCookiesButton.addEventListener("click", clearCookiesAndResetText);

  // Function to retrieve a cookie value
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find(row => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  // Function to clear cookies and reset text content
  function clearCookiesAndResetText() {
    Object.keys(profileTextElements).forEach(id => {
      setCookie(id, '', -1); // Delete the cookie
      document.getElementById(id).textContent = profileTextElements[id]; // Reset to default text
    });
    // Optionally, reload the page to reset styles as well
    // window.location.reload();
  }
  
  // Hide the StyleManager UI based on a query string
  const queryParams = new URLSearchParams(window.location.search);
  const showUI = queryParams.get('showUI') === 'true';
  if (showUI) {
    document.getElementById('style-manager-ui').style.display = 'block';
  }

  // Additional functionalities can be added here
  // ...
});

// Export functions if needed for external usage (e.g., from HTML onclick attributes)
export { clearCookiesAndResetText };
