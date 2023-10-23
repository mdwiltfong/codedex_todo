/*
Project memory. This will contain all the todos that are created by the user.
*/
let todos = [];
let todoListElement = document.getElementById("todo-list");
function addTodo(event, todos) {
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
  const newTodos = [...todos, todo];
  return newTodos;
}

function renderTodos(todos) {
  todoListElement.innerHTML = "";
  todos.forEach((todo) => {
    const newTodoHTML = generateTodoHTML(todo);
    todoListElement.appendChild(newTodoHTML);
  });

  return newTodoDiv;
}

function generateTodoHTML(todo) {
  const newTodoDiv = document.createElement("div");
  newTodoDiv.className = "card todo";
  newTodoDiv.innerHTML = `
   <div class="card-body">
                        <h5 class="card-title">${todo.todoTitle}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${todo.todoDate}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">${todo.todoNumOfPeople}</h6>
                        <p class="card-text">${todo.todoDescription}</p>
                        <button class="btn btn-primary">Done</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
    `;
  return newTodoDiv;
}

document.getElementById("submitTodo").addEventListener("submit", (event) => {
  todos = addTodo(event, todos);
  renderTodos(todos);
});
