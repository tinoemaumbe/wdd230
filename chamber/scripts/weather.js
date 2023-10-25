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