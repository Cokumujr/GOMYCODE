document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '3d4880ee324a0f277cb7fe86fb55a0d6'; 

    try {
        // Fetching the latitude and longitude for the entered city
        const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`);
        const geoData = await geoResponse.json();

        if (geoData.status !== 200) {
            throw new Error(geoData.message); // Handle city not found or other errors
        }

        const latitude = geoData.coord.lat;
        const longitude = geoData.coord.lon;
        const location = `${geoData.name}, ${geoData.sys.country}`;

        // Fetching the weather data using the latitude and longitude
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${apiKey}&units=metric`);
        const weatherData = await weatherResponse.json();

        const temperature = weatherData.current.temp;
        const description = weatherData.current.weather[0].description;
        

        document.getElementById('location').innerText = `Location: ${location}`;
        document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
        document.getElementById('description').innerText = `Weather: ${description}`;
       

    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('location').innerText = 'Location: N/A';
        document.getElementById('temperature').innerText = 'Temperature: N/A';
        document.getElementById('description').innerText = 'Weather: N/A';
    }
}
