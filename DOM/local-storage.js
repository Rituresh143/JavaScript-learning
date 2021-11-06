// Local storage 

// localStorage.setItem("todo", "Feed the cat ");
// localStorage.setItem("user","Ed");
// localStorage.setItem("todo","food myself");


// Session storage

// sessionStorage.setItem("todoList","session feeding cat");

// GETTING STUFF BACK
// const user = localStorage.getItem("user");

// console.log(typeof user);

const todoList = {
    todo1: "feeding the cat",
    todo2: "feeding myself"

};

const todoList = ["feed the cat","wash","listen to some classicall music"];

localStorage.setItem("todo",JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);
