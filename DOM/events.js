const button = document.querySelector('#submit');
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const nameInput = document.querySelector('.name-input');
const mainTitle = document.querySelector(".main-title");
// console.log(todoNr);
const items = todoList.children;

// CLICK, SCROLL, RESIZING THE BROWSER

// ATTACK A EVENT LISTENER

button.addEventListener('click', function(e){
    e.preventDefault();
    // create element
    const newItem = document.createElement('li');
    // Adding class
    newItem.classList.add("item");
    // adding the text
    newItem.innerText = nameInput.value;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
    // delete the value fron the input
    nameInput.value = "";

    //  createe the element and attaching the listener
    newItem.addEventListener('click',deleteItem);

    
});



function deleteItem(e){
    e.stopPropagation();
    e.target.remove();
}

todoList.addEventListener('click',function(){
    todoList.classList.toggle("fade");

});

// button.addEventListener("click",function(){
//        mainTitle.classList.add("spectacular");
// });



