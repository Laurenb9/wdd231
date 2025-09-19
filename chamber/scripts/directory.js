// Load members from JSON
async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

// Display members in container
function displayMembers(members) {
  const container = document.getElementById("members");
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership: ${member.membership}</p>
    `;
    container.appendChild(card);
  });
}

// Toggle grid/list view
document.getElementById("grid-view").addEventListener("click", () => {
  document.getElementById("members").className = "grid";
});
document.getElementById("list-view").addEventListener("click", () => {
  document.getElementById("members").className = "list";
});

// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Call function
getMembers();


const apiKey = "TU_API_KEY"; // 👉 cámbialo por tu API key
const lat = 5.07;   // coordenadas de Manizales (ejemplo)
const lon = -75.52;

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// Current weather
async function getCurrentWeather() {
  const response = await fetch(weatherUrl);
  const data = await response.json();

  document.getElementById("temp").textContent = `Temp: ${data.main.temp.toFixed(1)}°C`;
  document.getElementById("conditions").textContent = data.weather[0].description;

  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById("weather-icon").setAttribute("src", icon);
  document.getElementById("weather-icon").setAttribute("alt", data.weather[0].description);
}

// Forecast (3 días)
async function getForecast() {
  const response = await fetch(forecastUrl);
  const data = await response.json();

  // Filtra: 1 dato por día (12:00)
  const daily = data.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

  const forecastList = document.getElementById("forecast-list");
  forecastList.innerHTML = "";

  daily.slice(0, 3).forEach(day => {
    const li = document.createElement("li");
    li.textContent = `${new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" })}: ${day.main.temp.toFixed(1)}°C, ${day.weather[0].description}`;
    forecastList.appendChild(li);
  });
}

getCurrentWeather();
getForecast();

const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");
const members = document.getElementById("members");

gridBtn.addEventListener("click", () => {
  members.className = "grid";
  gridBtn.classList.add("is-active");
  listBtn.classList.remove("is-active");
});

listBtn.addEventListener("click", () => {
  members.className = "list";
  listBtn.classList.add("is-active");
  gridBtn.classList.remove("is-active");
});

