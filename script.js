const todos=[];

function addTodo(event) {
    event.preventDefault();
}

document.getElementById("submitTodo").addEventListener("submit",addTodo)