function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".city-search-input");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", changeCity);
