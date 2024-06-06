const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-17.82&lon=31.04&appid=58c54e5469d00e2a692ef975c1b44347&units=imperial";

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data);
}

function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}&deg;f</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();


const forecast = document.querySelector("#weather-forecast");

const url1 = "https://api.openweathermap.org/data/2.5/forecast?lat=-17.82&lon=31.04&appid=58c54e5469d00e2a692ef975c1b44347&units=imperial";

async function apiFetchForecast() {
    const response = await fetch(url1);
    const forecastData = await response.json();
    displayForecast(forecastData);
}

function displayForecast(forecastData) {
    forecastData.list.forEach((threeDay, i) => {
        if ([3, 6, 12].includes(i)) {
            const container = document.createElement("div");
            container.classList.add("container");
            const para = document.createElement("p");
            para.textContent = threeDay.main.temp;
            container.appendChild(para);
            forecast.appendChild(container);
        }        
    }); 
}

apiFetchForecast();