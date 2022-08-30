console.log("This page is created to learn javascript");
document.write('<h1>This page was created to Learn javascript!!!</h1>')

// Variables in javascript

var a = "This is just a number";

var a = "123";

var a = 321; 

document.getElementById('var').innerHTML = typeof(a); 

let x ;
// If a variable is declared in javascript the default value is undefined

x = null; 

// variable that are set to null are of type of objects

document.getElementById('let').innerHTML = typeof(x);

const m = "This is constant";

// m = "not a constant";

document.getElementById('const').innerHTML =m ;

p = 1000000000000000000000000000000n
// bigint is a number noted by n at the end of the number

document.write(p);


const num = 5; 
const result = num**20; 

console.log(result); 

function myfn(){

    console.log('I can have more than one log here \nThen this goes in the text line', true, 123);

}

myfn();

function greeting(name){
    document.getElementById('greeting').innerHTML = "Welcome to Hello learning session, "+name;
}

greeting('Roxanner');

function hasreturn (n){
    console.log("-".repeat(25));
    if(n===true){
        return true;
    }

    if(n=="3"){
        return "value matched the string  =="
    }
    if(n==="7"){
        return 'This will not print unless you enter "7" '    }
    if(n===12){
        return "value matched ==="
    }

    return false;
}

console.log(hasreturn(12));

let people = []; // this is an empty array; 

function friends_end(name){
    people.push(name);
    console.log(people); 
}

friends_end("ALex");
friends_end("Bob");
friends_start("Daniella");
friends_start("christi");
friends_start("Jordan");


function friends_start(name){
    people.unshift(name);
    console.log(people);
}

function remove(){
    const c = people.pop();
    console.log("Popped : ",c);

}

remove();

console.log('Final List of people',people);

