let todos=[];

function addTodo(event) {
    event.preventDefault();
}

document.getElementById("submitTodo").addEventListener("submit",(event)=>{
    todos=addTodo(event,todos)
})