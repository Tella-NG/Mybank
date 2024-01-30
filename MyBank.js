

document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the mobile menu button
    document.getElementById('mobile-menu-btn').addEventListener('click', function () {
      // Toggle the visibility of the navigation links
      var navLinks = document.querySelector('nav ul');
      navLinks.classList.toggle('show');
    });
  });

  // TellarBank.js

// Toggle Mobile Navigation
const mobileNavBtn = document.querySelector('.mobile-nav');
const navLinks = document.querySelector('nav ul');

mobileNavBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (Optional)
// You can implement form validation logic here if needed.

  