const menu = document.getElementById("menu");
const list = document.getElementById("list");
const back = document.getElementById("back");
const logo = document.getElementById("logo");

function drop() {
    if(menu.style.height === "0px") {
        menu.style.height = '300px';
        back.style.borderBottom = '1px solid rgb(255, 255, 255, 0.3)';
    }
    else {
        menu.style.height = '0';
        back.style.borderBottom = 'none';
    }
}
list.addEventListener('click', drop);

function home() {
    window.location.href = "home.html";
}
logo.addEventListener('click', home);
