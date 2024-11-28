// Get the theme toggle button
const toggleButton = document.getElementById('theme-toggle');

// Get the header and footer elements
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Check if the user has a saved theme preference in localStorage
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  header.classList.add('light-mode');
  footer.classList.add('light-mode');
  toggleButton.textContent = 'Switch to Dark Mode';
} else {
  document.body.classList.remove('light-mode');
  header.classList.remove('light-mode');
  footer.classList.remove('light-mode');
  toggleButton.textContent = 'Switch to Light Mode';
}

// Add event listener for the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the light mode class on body, header, and footer
  document.body.classList.toggle('light-mode');
  header.classList.toggle('light-mode');
  footer.classList.toggle('light-mode');
  
  // Update the theme preference in localStorage
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = 'Switch to Dark Mode';
  } else {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = 'Switch to Light Mode';
  }
});
