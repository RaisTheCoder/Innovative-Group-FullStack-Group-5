let savedToDos = JSON.parse(localStorage.getItem("todoList")) || [];

let todoList = document.getElementById("todo-list");
let completedTodoList = document.getElementById("completed-todo-list");

let todoTemp = document.getElementById("todoTemp");

let todoInput = document.getElementById("todo-input");
let todoDateInp = document.getElementById("todo-date");
let todoAdd = document.getElementById("todo-add");

let todoSrcInput = document.getElementById("todo-search");

function getNextId() {
  if (savedToDos.length === 0) {
    return 1;
  }
  return Math.max(...savedToDos.map((t) => t.id)) + 1;
}

function loadToDos() {
  let searchQuery = todoSrcInput.value;
  if (savedToDos != null) {
    todoList.innerHTML = "";
    completedTodoList.innerHTML = "";

    if (searchQuery) {
      let filteredTodos = savedToDos.filter((todo) =>
        todo.title.toLowerCase().includes(SearchQuery.toLowerCase()),
      );
      renderTodo(filteredTodos);
      return;
    } else {
      renderTodo(savedToDos);
    }
  } else {
    console.log("There's no TODOs");
  }
}

function renderTodo(ToDoArray = []) {
  ToDoArray.forEach((todo) => {
    let clonedTodo = todoTemp.content.cloneNode(true);

    let todoTitle = clonedTodo.querySelector(".todo-title");
    todoTitle.innerText = `${todo.title}`;
    let todoDate = clonedTodo.querySelector(".todo-date");
    todoDate.innerText = `${todo.date}`;
    todoDate.innerText = todo.date.replace("T", " - ");
    let todoComplete = clonedTodo.querySelector(".todo-complete");
    let todoRemove = clonedTodo.querySelector(".todo-remove");

    todoRemove.addEventListener("click", () => removeTodo(todo.id));

    todoComplete.checked = todo.completed;
    todoComplete.addEventListener("change", () => {
      todo.completed = todoComplete.checked;
      localStorage.setItem("todoList", JSON.stringify(savedToDos));
      loadToDos();
    });

    if (todo.completed) {
      todoTitle.style.textDecoration = "line-through";
      completedTodoList.append(clonedTodo);
    } else {
      todoList.append(clonedTodo);
    }
  });
}

function addTodo() {
  if (todoInput.value == null || todoInput.value == "") {
    console.log("Input can not be left empty!");
  } else {
    const newTodo = {
      id: getNextId(),
      title: todoInput.value,
      date: todoDateInp.value || "No date",
      completed: false,
    };

    savedToDos.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(savedToDos));

    loadToDos();
    todoInput.value = "";
    todoDateInp.value = "";
  }
}

function completeTodo(id) {
  const todo = savedToDos.find((todo) => todo.id === id);
  if (!todo) {
    return;
  }

  todo.completed = true;
  localStorage.setItem("todoList", JSON.stringify(savedToDos));
  loadToDos();
}

function removeTodo(id) {
  const todo = savedToDos.findIndex((todo) => todo.id === id);
  if (todo === -1) {
    console.log("This is not a todo");
    return;
  }

  savedToDos.splice(todo, 1);
  loadToDos();

  localStorage.setItem("todoList", JSON.stringify(savedToDos));
}

todoSrcInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    loadToDos(todoSrcInput.value);
  } else if (!todoSrcInput.value.length - 1) {
    loadToDos(savedToDos);
  }
});

todoAdd.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTodo();
  }
});

loadToDos();
