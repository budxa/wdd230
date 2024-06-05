const url1 = "data/members.json";


async function getBusinessesData() {
    try {
        const response = await fetch(url1);
        if (response.ok) {
            const data = await response.json();
            displayBusinesses(data.businesses);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
}

const displayBusinesses = (businesses) => {
    const members = document.querySelector("#members");
    businesses.forEach(business => {

        let member = document.createElement("section");
        let logo = document.createElement("img");
        let bname = document.createElement("h3");
        let address = document.createElement("p");
        let tel = document.createElement("p");
        let email = document.createElement("p");
        let level = document.createElement("h4")
        let site = document.createElement("a");

        logo.setAttribute("src", business.logo);
        logo.setAttribute("alt", `logo of ${business.organization}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "80");
        logo.setAttribute("height", "75");

        bname.textContent = `${business.organization}`;
        address.textContent = `${business.address}`;
        tel.textContent = `${business.phone}`;
        email.textContent = `${business.email}`;
        level.textContent = `${business.membership}`;
        site.setAttribute("href", `${business.website}`);
        site.textContent = business.website;
        site.setAttribute("target", "_blank");

        member.appendChild(logo);
        member.appendChild(bname);
        member.appendChild(address);
        member.appendChild(tel);
        member.appendChild(level);
        member.appendChild(email);
        member.appendChild(site);

        members.appendChild(member);
    });
}

getBusinessesData();

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const display = document.querySelector("article");

gridBtn.addEventListener("click", () => {
    display.classList.add("grid-directory");
    display.classList.remove("list-directory");

    document.querySelector(".menu").children[0].classList.add("active");
    document.querySelector(".menu").children[1].classList.remove("active");
});

listBtn.addEventListener("click", showList);

function showList() {
    display.classList.add("list-directory");
    display.classList.remove("grid-directory");

    document.querySelector(".menu").children[0].classList.remove("active");
    document.querySelector(".menu").children[1].classList.add("active");
}