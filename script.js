function displayTemperature(response) {
  //storing the info from the current-temperature id in the element temperatureElement
  let temperatureElement = document.querySelector("#current-temperature");
  //getting the current temperature data from the API and rounding it so we
  //don't have decimal numbers. Storing this info in the temperature element
  let temperature = Math.round(response.data.temperature.current);
  //storing the info from the current-city id in the element cityElement
  let cityElement = document.querySelector("#current-city");
  //applying the API data info of city to the innerHTML of cityElement.
  cityElement.innerHTML = response.data.city;
  //applying the info of temperature(which we got from the API when we created the element)
  //and adding it to the temperatuElements innerhTML.
  temperatureElement.innerHTML = temperature;

  //adding description, humidity and wind of current weather to further test my understanding
  let descriptionElement = document.querySelector("#description-weather");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
}

function search(event) {
  event.preventDefault();
  //get the info from the search form by finding the id ("#search-input")
  let searchInputInfo = document.querySelector("#search-input");
  //take the value from the input in the form and give it to the element city
  let currentCity = searchInputInfo.value;
  //console.log(city); //testing to see if value shows up, it works
  //storing my apikey in the element apiKey
  let apiKey = "8c50bt322daeoeaf091b2f13c5a404ce";
  //creating url and storing it in the element apiUrl
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${apiKey}&units=metric`;
  //importing axios(which we have done in the html file) and then calling it
  //getting the apiUrl
  //then calling the function displayTemperature which is above this function
  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
