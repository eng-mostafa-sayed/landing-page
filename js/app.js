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
const NewbuildMyNavBar = function() {
    // console.log("inside the navbar method"); //it was placed for testing purpose
    const myUlList = document.querySelector("#navbar__list");
    //creating the document fragment
    let documentFragment = new DocumentFragment();
    // for loop on the sectionslist
    let i = 1;
    for (sec of sectionsNodeList) {
        const listItem = document.createElement("li"); //creating the document fragment
        listItem.classList.add(`section${i}`); // adding class to each <li> i will us it later to change highlighting while scrolling
        const SectionDataNav = sec.getAttribute("data-nav");
        const sectionId = sec.getAttribute("id");
        //we added the <a> with id represents the section, and two classes on refering to the section which will used dynamically highlighting and the text shown will be the section number
        // listItem.innerHTML = `<a href="#${sectionId}" data-sec="${sectionId}" class="navLink ">${SectionDataNav}</a>`;
        const anc = document.createElement("a");
        const att1 = document.createAttribute("href");
        att1.value = `"#${sectionId}"`;
        anc.setAttributeNode(att1);
        const att2 = document.createAttribute("data-sec");
        att2.value = `"${sectionId}"`;
        anc.setAttributeNode(att2);
        const att3 = document.createAttribute("class");
        att3.value = "navLink ";
        anc.setAttributeNode(att3);
        anc.textContent = `${SectionDataNav}`;
        const currentSec = sec;
        //  console.log(currentSec); //it was for testing purposes
        listItem.addEventListener("click", (evt) => {
            console.log("insideEventListner");
            evt.preventDefault();
            // console.log(currentSec); //it was for testing purposes
            currentSec.scrollIntoView({ behavior: "smooth" });
        });
        listItem.appendChild(anc);
        documentFragment.appendChild(listItem);
        i++;
    }
    myUlList.appendChild(documentFragment);
};
//selecting all sections
const sectionsNodeList = document.querySelectorAll("section");
// storing the number of sections in variable
const sectionsNumber = sectionsNodeList.length;
//building the navBar after loading all Dom content
document.addEventListener("DOMContentLoaded", NewbuildMyNavBar);

// Scroll to section on link click

// Set sections as active

//this function to change style for the sections by adding or removing class "active-now"
const highlighting = () => {
    for (let sec = 0; sec < sectionsNumber; sec++) {
        //detecting the section's top
        const sectionRectangle = sectionsNodeList[sec].getBoundingClientRect();
        //the corresponding nav bar element for each section
        const navElement = document.querySelector(`.section${sec + 1}`);
        // console.log(navElement); //it was placed for testing purpose
        //if section on screen now change the style of it and its corresponding nav element
        if (sectionRectangle.top > -190 && sectionRectangle.top < 301) {
            //now changing the section style and adding animation
            sectionsNodeList[sec].classList.add("active-now-section");
            sectionsNodeList[sec].classList.add("active-now");
            //change the corresponding navbar element style too
            navElement.classList.add("active-now-nav");
        }
        //if it gone away recover the style by removing the class "active-now"
        else {
            //removing animation and style
            sectionsNodeList[sec].classList.remove("active-now-section");
            sectionsNodeList[sec].classList.remove("active-now");
            //change the corresponding navbar element style too
            navElement.classList.remove("active-now-nav");
        }
    }
};
window.addEventListener("scroll", highlighting);