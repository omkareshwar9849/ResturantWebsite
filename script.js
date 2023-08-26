let menu = document.querySelector("#menu-bars");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    nav.classList.remove("active");
};

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}