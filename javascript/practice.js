let counter = document.querySelector('#num');
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');

const ulElement = document.getElementById('listItem');
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
        const li = document.querySelector('[data-counter="'+c+'"]');
        const tblrow = document.querySelector('[data-counter-row="'+c+'"]');
        li.remove();
        tblrow.remove();
        c--; 
        console.log(c);
        counter.innerHTML=c;
        // tableIns();
        // listItem();
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
    trow.setAttribute('data-counter-row',c)
    const tcell = document.createElement('td');
    tcell.id='cell';
    const text = document.createTextNode(c);
    const dataRow = tblBody.appendChild(trow); 
    dataRow.appendChild(tcell).appendChild(text);
    dataRow.appendChild(document.createElement('value')).appendChild(document.createTextNode('Value added'));
}

const a = null ?? 2

document.writeln(a);

document.write('This is just a text')

const car = {
    type:"Fiat",
    model:"500",
    color:"white"
}
document.write('<br>')
document.write(car.color);

car.color = "red"; 
car.year = 2022;

document.write('<br>');
document.writeln(car.color);
document.write(car.year);
