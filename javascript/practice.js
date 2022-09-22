let counter = document.querySelector('#num');
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');

let c = 0;


function increase(){
    if(c>=0){
        c++; 
        console.log(c);
        counter.innerHTML=c;
        tableIns();
        listItem();
    }
}

function decrease(){
    if(c>0){
        c--; 
        console.log(c);
        counter.innerHTML=c;
        tableIns();
        listItem();
    }
}

inc.addEventListener('click',increase)
dec.addEventListener('click',decrease);

const mylist = document.getElementById('myList');

function listItem(){
        
    
        const li = document.createElement('li');
        li.id = 'listItem'; 
        li.setAttribute('data-counter',c); 
        const text = document.createTextNode('counter: '+c);
        li.appendChild(text);
        mylist.appendChild(li);
}


const tblBody = document.getElementById('tbl');

function tableIns(){
    const trow = document.createElement('tr');
    trow.id='row';
    const tcell = document.createElement('td');
    tcell.id='cell';
    const text = document.createTextNode('ID: '+c);
    tblBody.appendChild(trow).appendChild(tcell).appendChild(text);
}