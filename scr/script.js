function changeCurrentWeather(response) {
  let currentTemperature = document.querySelector(".current-temperature");
  let searchTemperature = response.data.temperature.current;
  let city = document.querySelector("h1");
  let currentDescription = document.querySelector(".current-weather-type");
  let currentHumidity = document.querySelector(".current-humidity");
  let currentWindSpeed = document.querySelector(".current-wind-speed");
  let currentHour = document.querySelector(".current-hour");
  let currentMinute = document.querySelector(".current-minutes");
  let currentDay = document.querySelector(".current-day-week");
  let date = new Date(response.data.time * 1000);

  city.innerHTML = response.data.city;
  currentDescription.innerHTML = response.data.condition.description;
  currentTemperature.innerHTML = Math.round(searchTemperature);
  currentHumidity.innerHTML = response.data.temperature.humidity;
  currentWindSpeed.innerHTML = response.data.wind.speed;
  currentHour.innerHTML = date.getHours();
  currentMinute.innerHTML = formatMinutes(date);
  currentDay.innerHTML = formatDay(date);
}

function formatDay(date) {
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  day = days[date.getDay()];

  return day;
}

function formatMinutes(date) {
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return minutes;
}

function searchCity(city) {
  let apiKey = "fa25b40fcffa301t230o795c80b7e53f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(changeCurrentWeather);
}

function selectCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".city-search-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", selectCity);

searchCity("Enschede");
