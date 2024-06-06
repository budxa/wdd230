const baseURL = "https://budxa.github.io/wdd230/";
const linksURL = "https://budxa.github.io/wdd230/data/links.json";
// const linksURL = "data/links.json";
const links = document.querySelector("#link-card");


async function getLinks() {

    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    
    for (let index = 0; index < weeks.length; index++) {
        let listEl = document.createElement("li");

        listEl.innerHTML = `${weeks[index].week}: `;
        weeks[index].links.forEach((link) => {
            let linkEl = document.createElement("a");
            linkEl.href = link.url;
            linkEl.title = link.title;
            linkEl.innerHTML = link.title;
            linkEl.target = "_blank";

            listEl.appendChild(linkEl);
        });

        links.appendChild(listEl);
    }
};

getLinks();