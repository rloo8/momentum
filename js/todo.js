const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDo() {
  localStorage.setItem("todolist", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveToDo();
}

function handleChecked(event) {
  const checkBtn = event.target;
  const li = event.target.parentElement;

  if (li.classList.contains("unchecked")) {
    li.classList.remove("unchecked");
    li.classList.add("checked");
    checkBtn.setAttribute("src", "image/checked.png");
  } else {
    li.classList.remove("checked");
    li.classList.add("unchecked");
    checkBtn.setAttribute("src", "image/unchecked.png");
  }
}

function paintToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  li.classList.add(todo.checked ? "checked" : "unchecked");

  const span = document.createElement("span");
  span.innerText = todo.text;

  const button = document.createElement("img");
  button.src = "image/delete_icon.png";
  button.addEventListener("click", deleteToDo);

  const checkBtn = document.createElement("img");
  checkBtn.classList.add("check");
  checkBtn.setAttribute(
    "src",
    todo.checked
      ? (checkBtn.src = "image/checked.png")
      : (checkBtn.src = "image/unchecked.png")
  );
  checkBtn.addEventListener("click", handleChecked);

  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const todoObj = {
    text: newTodo,
    id: Date.now(),
    checked: false,
  };
  toDos.push(todoObj);

  paintToDo(todoObj);
  saveToDo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDoList = localStorage.getItem("todolist");

if (savedToDoList !== null) {
  const parsedToDoList = JSON.parse(savedToDoList);
  toDos = parsedToDoList;
  parsedToDoList.forEach(paintToDo);
}
