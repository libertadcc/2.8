'use strict'; 

const face = document.querySelector('.face');
const head = document.querySelector('.head');

function wink() {
    face.innerHTML=`;P`;
    head.classList.add('red');
    head.classList.remove('rain');
}
function normal() {
    face.innerHTML=`:)`;
    head.classList.remove('red','rain');
}
function tongue() {
    face.innerHTML=`;)`;
    head.classList.remove('red');
    head.classList.add('rain');
}

head.addEventListener('click', wink);

head.addEventListener('mouseout', normal);

head.addEventListener('mouseover', tongue);