
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rng");

// Range Event Listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// Password
const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const fb = document.querySelector("#feedback");

pwd2.addEventListener('focusout', controlar)

function controlar() {
    if (pwd1.value !== pwd2.value) {
        pwd1.value=""
        pwd2.value=""
        pwd1.focus()
        fb.textContent = "Values do not match. Try again."
    } else {
        fb.textContent=""
    }
}