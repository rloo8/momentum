const API_KEY = "9b36f45c8e28e1ecbbaab595f7180216";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather .city");
      city.innerText = data.name;

      const weather = document.querySelector("#weather img");
      const weatherIconCode = data.weather[0].icon;
      weather.src = `image/weather/${weatherIconCode}.png`;

      const temperature = document.querySelector("#weather .temp");
      temperature.innerText = `${Math.round(data.main.temp)}℃`;
    });
}
function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
