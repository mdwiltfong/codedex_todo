/*
Project memory. This will contain all the todos that are created by the user.

todo={
    todoTitle,
    todoNumOfPeople,
    todoDate,
    todoDescription,
    isEditting
}
*/
let todos = [];
let todoListElement = document.getElementById("todo-list");
let editForm = document.getElementById("editForm");
function addTodo(event, todos) {
  event.preventDefault();
  const todoTitle = event.target[0].value;
  const todoNumOfPeople = event.target[1].value;
  const todoDate = event.target[2].value;
  const todoDescription = event.target[3].value;
  const isEditting = false;
  const todo = {
    todoTitle,
    todoNumOfPeople,
    todoDate,
    todoDescription,
    isEditting,
  };
  const newTodos = [...todos, todo];
  return newTodos;
}
function updateTodo(event, todos, todoId) {
  event.preventDefault();
  const todoTitle = event.target[0].value;
  const todoNumOfPeople = event.target[2].value;
  const todoDate = event.target[1].value;
  const todoDescription = event.target[3].value;
  const isEditting = false;
  const todo = {
    todoTitle,
    todoNumOfPeople,
    todoDate,
    todoDescription,
    isEditting,
  };
  todos[todoId] = todo;
  return todos;
}

function renderTodos(todos) {
  const todoListHTML = todos
    .map((todo, index) => generateTodoHTML(todo, index))
    .join("");
  todoListElement.innerHTML = todoListHTML;
}

function generateTodoHTML(todo, index) {
  let todoHtml = "";
  if (todo.isEditting == true) {
    todoHtml = `

    <form data-se=${index} class="card-body d-flex flex-column my-2">
      <input class="card-title" value=${todo.todoTitle}></input>
      <input type ="date" class="card-subtitle mb-2 text-muted" value=${todo.todoDate}></input>
      <input type="number"class="card-subtitle mb-2 text-muted" value=${todo.todoNumOfPeople}></input>
      <input class="card-text" value=${todo.todoDescription}></input>              
    <div class="d-flex justify-content-start my-2">
    <button type="submit" id="done" class="btn btn-success w-25">Done</button>
    <button type="submit" id="cancel" class="btn btn-primary w-25 mx-2">Cancel</button>   
    </div>
    </form> 
    
    `;
  } else {
    todoHtml = `
   <div data-se=${index} class="card-body my-2">
                        <h5 class="card-title">${todo.todoTitle}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${todo.todoDate}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">${todo.todoNumOfPeople}</h6>
                        <p class="card-text">${todo.todoDescription}</p>
                        <button type="click" id="done" class="btn btn-success w-25">Done</button>
                        <button type="submit" id="edit" class="btn btn-primary w-25">Edit</button>
                    </div>
    `;
  }
  return todoHtml;
}

function makeTodoEditable(todos, todoId) {
  const todo = todos[todoId];
  todo.isEditting = true;
  todos[todoId] = todo;
  return todos;
}

document.getElementById("submitTodo").addEventListener("submit", (event) => {
  todos = addTodo(event, todos);
  renderTodos(todos);
});
document.getElementById("todo-list").addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = event.currentTarget;
  const todoId = todo.getAttribute("data-se");

  if (event.target.id == "edit") {
    todos = makeTodoEditable(todos, todoId);
    renderTodos(todos);
  }

  if (event.target.id == "done") {
    // Update the todo here and rerender the list
    todos = updateTodo(event, todos, todoId);
    renderTodos(todos);
  }
});
