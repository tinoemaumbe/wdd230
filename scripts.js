// Get the current year and update the "year" element
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Get the last modified date and update the "lastModified" element
const dateElement = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
dateElement.textContent = "Last Modified: " + lastModifiedDate;


const yearElement = document.getElementById("year");
//const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const dateElement = document.getElementById("lastModified");
//const lastModifiedDate = document.lastModified;
dateElement.textContent = "LastModified: " + lastModifiedDate;

//const hamburgerButton = document.getElementById("hamburger-button");
const menuItems = document.querySelector("nav ul");
hamburgerButton.addEventListener("click", () => {
  menuItems.classList.toggle("show-menu");
});

const darkModeToggle = document.getElementById("dark-mode-toggle");
const mainArea = document.querySelector("main");
darkModeToggle.addEventListener("click", () => {
  mainArea.classList.toggle("dark-mode");
});

const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerButton.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("show-menu");
});

function toggleDarkMode() {
    const mainContent = document.getElementById("main-content");
    mainContent.classList.toggle("dark-mode");
  }
