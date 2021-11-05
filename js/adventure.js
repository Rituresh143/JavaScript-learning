// Generate a random number Done

function guessGame(){

    let randomNr = Math.floor(Math.random()* 11);
    let guess;

    do{
        guess = prompt("Guss a number between 1-10");
        console.log(guess,randomNr);
        if(randomNr > guess){
            console.log("you are LoL");

        }
        else if(randomNr < guess){
            console.log("You are LoL + LoL");

        }
    }
    while(guess != randomNr);
        console.log("You won");
    }


guessGame();