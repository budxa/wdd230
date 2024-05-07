const date = new Date();

let year = date.getFullYear();

let currentYear = `${year}`;

document.querySelector("#year").textContent = currentYear;

document.getElementById("currentdate").textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const darkMde = document.querySelector("#toggle");

darkMde.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("dark")
});