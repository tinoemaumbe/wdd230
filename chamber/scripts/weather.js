const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Gweru&appid=c0c96f6b560d532a74ad73b558a917eb";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const t = jsObject.main.temp.toFixed(1);
    document.querySelector("#temp").textContent = t;

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windsp = jsObject.wind.speed;
    document.querySelector("#gweather").setAttribute("src", iconsrc);
    document.querySelector("#gweather").setAttribute("alt", desc);
    document.querySelector("#partly").textContent = desc;
    document.querySelector("#speed").textContent = windsp;

    if (t <= 10 && windsp > 4.8) {
      const windchill =
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(windsp, 0.16) +
        0.3965 * t * Math.pow(windsp, 0.16);
      document.querySelector("#wc").innerHTML = `${Math.round(
        windchill
      )}&#176;`;
    } else {
      document.querySelector("#wc").innerHTML = "N/A";
    }
  });








async function fetchWeatherForecast() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=c0c96f6b560d532a74ad73b558a917eb=Gweru&days=5');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching weather forecast:', error);
    return null;
  }
}

function updateForecastSection(forecastData) {
  const forecastSection = document.querySelector('.forecast');
  if (!forecastData || !forecastSection) return;

  forecastSection.innerHTML = '';

  const forecastTitle = document.createElement('h3');
  forecastTitle.textContent = 'Weather Forecast';

  const forecastList = document.createElement('ul');
  forecastList.classList.add('forecast-list');

  forecastData.forecast.forecastday.forEach((day) => {
    const forecastItem = document.createElement('li');
    forecastItem.classList.add('forecast-item');

    const date = document.createElement('span');
    date.classList.add('forecast-date');
    date.textContent = day.date;

    const condition = document.createElement('span');
    condition.classList.add('forecast-condition');
    condition.textContent = day.day.condition.text;

    const temperature = document.createElement('span');
    temperature.classList.add('forecast-temperature');
    temperature.textContent = `${day.day.mintemp_c}°C - ${day.day.maxtemp_c}°C`;

    forecastItem.appendChild(date);
    forecastItem.appendChild(condition);
    forecastItem.appendChild(temperature);

    forecastList.appendChild(forecastItem);
  });

  forecastSection.appendChild(forecastTitle);
  forecastSection.appendChild(forecastList);
}

fetchWeatherForecast()
  .then((data) => {
    updateForecastSection(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
