function preloader() {
    let preloader = document.querySelector(".preloader");
    let video = document.querySelector(".stage__video");

    window.onload = function () {
        preloader.classList.add("preloader_loaded");
        video.style.animation = "stageFade 1.5s ease";
    };
}
preloader();

function menu() {
    let burgerMenu = document.querySelector(".burger-menu");
    let menuInfo = document.querySelector(".info");

    burgerMenu.addEventListener("click", () => {
        menuInfo.classList.toggle("info_active");
        burgerMenu.classList.toggle("toggle");
    });
}
menu();