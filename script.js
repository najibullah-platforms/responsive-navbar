
// Select Hamburger Button
const hamburger = document.getElementById("hamburger");

// Select Navigation Menu
const navMenu = document.getElementById("navMenu");

// Add Click Event
hamburger.addEventListener("click", function() {

    // Toggle Active Class
    navMenu.classList.toggle("active");

});
