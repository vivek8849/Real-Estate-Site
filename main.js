import './style.css'

const menubarEl = document.getElementById('menubar');
const menumobileEl = document.getElementById('menu_mobile');
const scrollEl = document.getElementById('body_site');
const openEl = document.getElementById('open');
const closeEl = document.getElementById('close');

// menubarEl.addEventListener('click',() => )

menubarEl.addEventListener('click',() =>onClose());

document.getElementById("demo1").onclick = function() {onClose()};
document.getElementById("demo2").onclick = function() {onClose()};
document.getElementById("demo3").onclick = function() {onClose()};
document.getElementById("demo4").onclick = function() {onClose()};
document.getElementById("demo5").onclick = function() {onClose()};
document.getElementById("demo6").onclick = function() {onClose()};
document.getElementById("demo7").onclick = function() {onClose()};

function onClose(){
    menumobileEl.classList.toggle("show_menu");
    scrollEl.classList.toggle("scroll_hide");
    openEl.classList.toggle("open");
    closeEl.classList.toggle("close");
};