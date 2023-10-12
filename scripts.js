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
    mainConten
    t.classList.toggle("dark-mode");
  }






  const apiKey = 'a9d23437628f6eb7437f66c23fb7090f'; // Replace with your OpenWeatherMap API key

// Function to fetch weather data from OpenWeatherMap API
async function getWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Gweru,zw&units=metric&appid=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
}

// Function to update the weather information in the HTML
function updateWeatherInformation(data) {
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const weatherIconElement = document.getElementById('weatherIcon');

  temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
  descriptionElement.textContent = `Condition: ${data.weather[0].description}`;
  weatherIconElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIconElement.alt = `Weather Icon: ${data.weather[0].description}`;
}

// Fetch weather data and update the information card
getWeatherData()
  .then(data => updateWeatherInformation(data))
  .catch(error => console.log('Error:', error));
