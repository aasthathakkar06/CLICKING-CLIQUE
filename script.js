// script.js
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');

themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    // Switch to dark mode
    body.classList.remove('light');
    body.classList.add('dark');
    container.classList.remove('light');
    container.classList.add('dark');
    h1.classList.remove('light');
    h1.classList.add('dark');
    themeToggleButton.textContent = '🌞'; // Change to Sun Icon (for light mode)
  } else {
    // Switch to light mode
    body.classList.remove('dark');
    body.classList.add('light');
    container.classList.remove('dark');
    container.classList.add('light');
    h1.classList.remove('dark');
    h1.classList.add('light');
    themeToggleButton.textContent = '🌙'; // Change to Moon Icon (for dark mode)
  }
});