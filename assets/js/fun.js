const   navMenu = document.querySelector(".nav-links");
const   Menu = document.querySelector("#menu").onclick = () => {
    navMenu.classList.toggle("active");
};

const   humburger = document.querySelector("#menu");

document.addEventListener('click', function (e) {
    if(!humburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});



const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scroling-active", windowPosition);
});