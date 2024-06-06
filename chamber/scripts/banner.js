function bannerDays() {
    const today = new Date().getDay();
    return [1, 2, 5].includes(today);
}

function clsBanner() {
    const banner = document.getElementById("banner");
    banner.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    if (bannerDays()) {
        const banner = document.getElementById("banner");
        banner.style.display = "flex";
    }
});