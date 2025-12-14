// MINIMAL EXAM VERSION - 10 Lines
const API_KEY = "9351ee22b0917e5901e60be617cf6f2b";

document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weatherInfo");
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    weatherDiv.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2><p>${data.main.temp}°C</p><p>${data.weather[0].description}</p>`;
  } catch (error) {
    weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
