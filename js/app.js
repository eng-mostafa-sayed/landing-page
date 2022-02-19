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

var buildMyNavBar = function() {
    console.log("inside the navbar method");
    var myUlList = document.querySelector("#navbar__list");
    //creating the document fragment
    var documentFragment = new DocumentFragment();
    // for loop on the sectionslist
    for (var sec = 0; sec < sectionsNumber; sec++) {
        const listItem = document.createElement("li"); //creating the document fragment
        const SectionDataNav = sectionsNodeList[sec].getAttribute("data-nav");
        const sectionId = sectionsNodeList[sec].getAttribute("id");

        //we added the <a> with id represents the section, and two classes on refering to the section which will used dynamically highlighting and the text shown will be the section number
        listItem.innerHTML = `<a href="#${sectionId}" class="navLink section${
      sec + 1
    }">${SectionDataNav}</a>`;
        documentFragment.appendChild(listItem);
    }
    myUlList.appendChild(documentFragment);
};

//selecting all sections
var sectionsNodeList = document.querySelectorAll("section");
// storing the number of sections in var
const sectionsNumber = sectionsNodeList.length;
//building the navBar after loading all Dom content
document.addEventListener("DOMContentLoaded", buildMyNavBar);

// Scroll to section on link click

// Set sections as active

//this function to change style for the sections by adding or removing class "active-now"
const highlighting = () => {
    for (var sec = 0; sec < sectionsNumber; sec++) {
        //detecting the section's top
        const sectionRectangle = sectionsNodeList[sec].getBoundingClientRect();
        //the corresponding nav bar element for each section
        const navElement = document.querySelector(`.section${sec + 1}`);
        console.log(navElement);
        //if section on screen now change the style of it and its corresponding nav element
        if (sectionRectangle.top > -190 && sectionRectangle.top < 301) {
            //now changing the section style
            sectionsNodeList[sec].classList.add("active-now-section");
            //change the corresponding navbar element style too
            navElement.classList.add("active-now-nav");
        }
        //if it gone away recover the style by removing the class "active-now"
        else {
            sectionsNodeList[sec].classList.remove("active-now-section");
            //change the corresponding navbar element style too
            navElement.classList.remove("active-now-nav");
        }
    }
};

window.addEventListener("scroll", highlighting);