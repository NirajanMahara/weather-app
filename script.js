// Get DOM elements
const form = document.getElementById("weather-form");
const input = document.getElementById("city-input");
const errorMsg = document.getElementById("error-msg");
const weatherContainer = document.getElementById("weather-container");
const citiesList = document.getElementById("cities-list");
const loadingContainer = document.getElementById("loading-container");

// API key for OpenWeatherMap
const apiKey = "181bbc820d661f8a5720f0e61677053b";

// Event listener for form submission
form.addEventListener("submit", async e => {
  e.preventDefault();

  const inputVal = input.value.trim();
  // Validate input
  if (inputVal === "") {
    showError("Please enter a city name");
    return;
  }

  // Show loading indicator
  showLoading();

  // Fetch weather data from API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    showError(error.message);
  } finally {
    // Reset form and focus on input
    form.reset();
    input.focus();
    // Hide loading indicator
    hideLoading();
  }
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Display weather data on the webpage
function displayWeather(data) {
  const { main, name, sys, weather } = data;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

  const li = document.createElement("li");
  li.classList.add("city");

  // Convert Celsius to Fahrenheit
  const fahrenheit = celsiusToFahrenheit(main.temp);

  li.innerHTML = `
    <h2 class="city-name">${name}, ${sys.country}</h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup> / ${Math.round(fahrenheit)}<sup>°F</sup></div>
    <img class="city-icon" src="${icon}" alt="${weather[0].description}">
    <p>${weather[0].description}</p>
  `;
  citiesList.appendChild(li);
  errorMsg.textContent = ""; // Clear error message
  weatherContainer.style.display = "block"; // Show weather container after displaying data
}

// Display error message
function showError(message) {
  errorMsg.textContent = message;
  // weatherContainer.style.display = "none"; // Hide weather container in case of error
}

// Show loading indicator
function showLoading() {
  loadingContainer.style.display = "block";
}

// Hide loading indicator
function hideLoading() {
  loadingContainer.style.display = "none";
}