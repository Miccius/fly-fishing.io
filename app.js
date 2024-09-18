// Get the required elements from the DOM
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links li a'); // Select all links in nav-links

// Function to open the menu
menu.addEventListener('click', () => {
    console.log('Menu clicked'); // Log for debugging
    navLinks.classList.add('nav-active'); // Show the navigation links
    menu.style.display = 'none'; // Hide the menu button
    close.style.display = 'block'; // Show the close button
});

// Function to close the menu
close.addEventListener('click', () => {
    console.log('Close clicked'); // Log for debugging
    navLinks.classList.remove('nav-active'); // Hide the navigation links
    menu.style.display = 'block'; // Show the menu button again
    close.style.display = 'none'; // Hide the close button
});

// Add event listener to all navigation links to close the menu when clicked
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Link clicked'); // Log for debugging
        navLinks.classList.remove('nav-active'); // Hide the navigation links
        menu.style.display = 'block'; // Show the menu button again
        close.style.display = 'none'; // Hide the close button
    });
});




// Date update functionality
let date = document.getElementById('today-date');

setInterval(() => {
    let d = new Date();
    date.innerHTML = d.toLocaleString("en-UK");
}, 1000);