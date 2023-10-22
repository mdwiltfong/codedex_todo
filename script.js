/*
Project memory. This will contain all the todos that are created by the user.
*/
const todos = [];

function addTodo(event) {
  event.preventDefault();
  const todoTitle = event.target[0].value;
  const todoNumOfPeople = event.target[1].value;
  const todoDate = event.target[2].value;
  const todoDescription = event.target[3].value;
  const todo = {
    todoTitle,
    todoNumOfPeople,
    todoDate,
    todoDescription,
  };
  todos.push(todo);
}

document.getElementById("submitTodo").addEventListener("submit", addTodo);
