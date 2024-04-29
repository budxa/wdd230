const date = new Date();

let year = date.getFullYear();

let currentYear = `${year}`;

document.querySelector("#year").textContent = currentYear;

document.getElementById("currentdate").textContent = document.lastModified;