function changeCurrentTemperature(response) {
  let currentTemperature = document.querySelector(".current-temperature");
  let searchTemperature = response.data.temperature.current;
  let city = document.querySelector("h1");
  city.innerHTML = response.data.city;

  currentTemperature.innerHTML = Math.round(searchTemperature);
}

function searchCity(city) {
  let apiKey = "fa25b40fcffa301t230o795c80b7e53f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(changeCurrentTemperature);
}

function selectCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".city-search-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", selectCity);

searchCity("Enschede");
