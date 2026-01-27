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

  let icon = document.querySelector(".current-weather-icon");
  icon.innerHTML = changeIcon(response.data.condition.icon);
}

function changeIcon(condition) {
  if (condition === "clear-sky-day") {
    return "sunny";
  }
  if (condition === "clear-sky-night") {
    return "dark_mode";
  }
  if (condition === "few-clouds-day") {
    return "partly_cloudy_day";
  }
  if (condition === "few-clouds-night") {
    return "partly_cloudy_night";
  }
  if (
    condition === "scattered-clouds-day" ||
    condition === "scattered-clouds-night"
  ) {
    return "cloud";
  }
  if (
    condition === "broken-clouds-day" ||
    condition === "broken-clouds-night"
  ) {
    return "filter_drama";
  }
  if (condition === "shower-rain-day" || condition === "shower-rain-night") {
    return "rainy_light";
  }
  if (condition === "rain-day" || condition === "rain-night") {
    return "rainy";
  }
  if (condition === "thunderstorm-day" || condition === "thunderstorm-night") {
    return "thunderstorm";
  }
  if (condition === "snow-day" || condition === "snow-night") {
    return "ac_unit";
  }
  if (condition === "mist-day" || condition === "mist-night") {
    return "";
  }
}

function formatDay(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
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
