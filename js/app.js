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
var sectionsNodeListNodeList = document.querySelectorAll("section");
var buildMyNavBar = function() {
    console.log("inside the navbar method");
    var myUlList = document.querySelector("ul#navbar__list");
    var documentFragment = document.createDocumentFragment(); //creating the document fragment
    // for loop on the sectionslist
    for (var sec = 1; sec <= sectionsNodeList.length; sec++) {
        const listItem = document.createElement("li"); //creating the document fragment
        listItem.innerHTML = `<a href="#${sec.id}" class="navLink">${sec.dataset.nav}</a>`; // adding <a> and customize the link
    }
};
//just for testing
console.log("before the navbarBuilder");
//building the navBar after loading all Dom content
document.addEventListener("DomContentLoaded", buildMyNavBar);
//just for testing
console.log("afer the navbarBuilder");
// Scroll to section on link click

// Set sections as active