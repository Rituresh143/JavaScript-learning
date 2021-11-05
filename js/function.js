// function greet(text){
//     // let name = prompt('What is your name');
//     console.log("Welcome to our website "+ text);
// }

// console.log("rest of the code");


// function signUp(){
//     let name = prompt("What is your name");
//     greet(name);
// }
// 
// /
// /
// signUp();

// let maxNr = Math.max(1,5);

// console.log(maxNr);

function max(nr1=0, nr2=0){
    if(nr1 > nr2){
        return nr1;
    }
    else{
        return nr2;
    }
}

let inbox = max(1,5);
console.log(inbox);
