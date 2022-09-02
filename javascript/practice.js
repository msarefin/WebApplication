let counter = document.querySelector('#num');
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');

let c = 0;


function increase(){
    c++; 
    console.log(c);
    counter.innerHTML=c;
}

function decrease(){
    c--; 
    console.log(c);
    counter.innerHTML=c;
}

inc.addEventListener('click',increase)
dec.addEventListener('click', decrease);