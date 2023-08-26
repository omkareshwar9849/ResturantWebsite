let menu = document.querySelector("#menu-bars");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
};
