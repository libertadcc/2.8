'use strict'; 

const face = document.querySelector('.face');
const head = document.querySelector('.head');

function wink() {
    face.innerHTML=`;)`;
}
function normal() {
    face.innerHTML=`:)`;
}

head.addEventListener('click', wink);

head.addEventListener('mouseout', normal);