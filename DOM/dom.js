// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelector(".item");

const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById('todo-list');
const todoNr = document.getElementsByClassName("todo-nr")[0];


// console.log(collectionItems);

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const newItem2 = document.createElement("li");
newItem2.classList.add("item");
newItem2.innerText = "Item 4";


todoList.appendChild(newItem);
todoList.appendChild(newItem2);

// update the amount of items thaat we have