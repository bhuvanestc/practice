const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

const apikey = "055b715939444314ab4123535262601";
const baseURL = `http://api.weatherapi.com/v1/current.json`;

searchBtn.addEventListener("click", async function () {
  const city = cityInput.value;
  const url = `${baseURL}?key=${apikey}&q=${city}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  weatherResult.innerHTML = `
  <h2>${data.location.name}</h2>
  <p>Temperature: ${data.current.temp_c}°C</p>
  <p>Weather: ${data.current.condition.text}</p>
  <img src="https:${data.current.condition.icon}">`;
});
