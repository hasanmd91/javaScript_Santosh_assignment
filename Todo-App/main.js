const form = document.querySelector("#form");
const titleInput = document.querySelector("#titleInput");
const dateInput = document.querySelector("#dateInput");
const textInput = document.querySelector("#textInput");
const tasks = document.querySelector("#tasks");
const add = document.querySelector("#add");

// data storage array

let TodosArray = [];

// data rendering function to dom

const createTodo = () => {
  tasks.innerHTML = "";
  TodosArray.map((todo, index) => {
    tasks.insertAdjacentHTML(
      "afterbegin",
      `<div id=${index}>
    <span class="fw-bold"> ${todo.title} </span>
    <span class="small text-secondary">${todo.date}</span>
    <p>${todo.text}</p>
    <span class="options">
      <i onclick="editTask(this)" class="fa-solid fa-pen-to-square"  data-bs-toggle="modal" data-bs-target="#form" ></i>
      <i onclick="deleteTask(this)" class="fa-solid fa-trash"></i>
    </span>
  </div> `
    );
  });
};

// form on Submit event

form.addEventListener("submit", (e) => {
  e.preventDefault();

  TodosArray.push({
    title: titleInput.value,
    date: dateInput.value,
    text: textInput.value,
  });

  localStorage.setItem("data", JSON.stringify(TodosArray));
  createTodo();
  add.setAttribute("data-bs-dismiss", "modal");
  add.click();
  (() => {
    add.setAttribute("data-bs-dismiss", "");
  })();
  resetForm();
});

//edit task

const editTask = (e) => {
  let selectedElement = e.parentElement.parentElement;
  titleInput.value = selectedElement.children[0].innerHTML;
  dateInput.value = selectedElement.children[1].innerHTML;
  textInput.value = selectedElement.children[2].innerHTML;
  deleteTask(e);
};

// delete task

const deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  TodosArray.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(TodosArray));
};

// IIFE method parsing data from local storage

(() => {
  TodosArray = JSON.parse(localStorage.getItem("data")) || [];
  createTodo();
})();

// reset form

let resetForm = () => {
  titleInput.value = "";
  dateInput.value = "";
  textInput.value = "";
};
