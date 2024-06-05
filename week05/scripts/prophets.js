const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}


const displayProphets = (prophets) => {
    const cards = document.querySelector("#cards");
    prophets.forEach((prophet) => {

        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img")
        let birthDate = document.createElement("p");
        let deathDate = document.createElement("p");
        let years = document.createElement("p");
       
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthDate}`;
        deathDate.textContent = `Date of Death: ${prophet.deathDate}`;
        years.textContent = `Number of Years Served: ${prophet.years}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(deathDate);
        card.appendChild(years);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();