const date = new Date();

let year = date.getFullYear();

let currentYear = `${year}`;

document.querySelector('#year').textContent = currentYear;

document.getElementById('currentdate').textContent = document.lastModified;

// Hamburger Javascript

const hamButton = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
	navbar.classList.toggle('open');
	hamButton.classList.toggle('open');
});


let lastVisit = localStorage.getItem("last-visit");
const lastVisitElement = document.querySelector('#lastVisith');

if (lastVisitElement != null) {
    if (lastVisit) {
        let currentDate = new Date();
        let previousDate = new Date(lastVisit);
        let timeDiffernce = currentDate.getTime() - previousDate.getTime();

        let differnceInDays = Math.floor(timeDiffernce / (1000 * 60 * 60 * 24));

        lastVisitElement.innerHTML = `You visited this webpage ${differnceInDays} day(s) ago!`;
	} else {
		lastVisitElement.innerHTML = `Welcome! Let us know if you have any questions.`;
	}

    localStorage.setItem("last-visit", new Date());
};
