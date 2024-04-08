function getWeather() {
    const cityInput = document.getElementById('city-input').value;
    const apiKey = '9787ac3d11d937afee6d8906b16576f0';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherResults = document.getElementById('weather-results');
    weatherResults.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Tempo: ${data.weather[0].description}</p>
    `;
}