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

