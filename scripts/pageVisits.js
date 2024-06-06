const visitsDisplay = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'This is your first visit. 🎉🎊 Welcome!';
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);


const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// -17.825910219031055, 31.04855139244909

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-17.82&lon=31.04&appid=58c54e5469d00e2a692ef975c1b44347&units=imperial";

async function apiFetch() {
    
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
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