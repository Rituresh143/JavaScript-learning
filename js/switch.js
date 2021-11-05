// const text = 'KIWi';
// let fruit = 0;


// switch (text) {
//     case 'banana':
//         console.log('wow I love apple');
//         fruit=1;
//         break;
//   case 'apple':
//     console.log('I dont like apples');
//     fruit = 2;
//     break;
//     default:
//         console.log('what fruit is that')
//         break;

        
// }

let userInput = prompt('tell me a fruit');
let convertedValue = userInput.toLocaleLowerCase();

switch(userInput){
    case 'apple':
        console.log('apple i like to eat');
        break;
    case 'banan':
        console.log('I like to eat banana');
        break;
        default:
            console.log('That is fruit to know');
}