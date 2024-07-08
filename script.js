// script.js
const apiKey = 25797e8314601f3e49c52d5b13965f35;
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

searchBtn.addEventListener('click', fetchWeatherData);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchWeatherData();
    }
});

function fetchWeatherData() {
    const city = searchInput.value.trim();
    if (city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
           .then(response => response.json())
           .then(data => displayWeatherData(data))
           .catch(error => console.error(error));
    }
}

function displayWeatherData(data) {
    cityElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
