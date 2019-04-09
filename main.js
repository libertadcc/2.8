'use strict'; 

const face = document.querySelector('.face');
const head = document.querySelector('.head');

function wink() {
    face.innerHTML=`;P`;
}
function normal() {
    face.innerHTML=`:)`;
}
function tongue() {
    face.innerHTML=`;)`;
}

head.addEventListener('click', wink);

head.addEventListener('mouseout', normal);

head.addEventListener('mouseover', tongue);