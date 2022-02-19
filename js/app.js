/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

//selecting all sections
var sections = document.querySelectorAll("section");
//building the navBar
document.addEventListener("DomContentLoaded", buildMyNavBar);
const buildMyNavBar = () => {
    var myUlList = document.querySelector("ul#navbar__list");
    var documentFragment = document.createDocumentFragment(); //creating the document fragment
    for (var sec = 1; sec <= sections.length; sec++) {
        const listItem = document.createElement("li"); //creating the document fragment
        listItem.textContent = `<a href="#${sec.id}" class="navLink">${sec.dataset.nav}</a>`; // adding <a> and customize the link
    }
};
// Scroll to section on link click

// Set sections as active