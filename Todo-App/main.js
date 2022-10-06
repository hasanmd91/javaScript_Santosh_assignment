const form = document.querySelector("#form");
const titleInput = document.querySelector("#titleInput");
const dateInput = document.querySelector("#dateInput");
const textInput = document.querySelector("#textInput");

let TodosArray = [];

const createTodo = () => {
  TodosArray.map(() => {
    console.log("yahabibi");
  });
};

class Todo {
  constructor(title, date, text) {
    this.title = title;
    this.date = date;
    this.text = text;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = titleInput.value;
  let date = dateInput.value;
  let text = textInput.value;

  const TodoObj = new Todo(title, date, text);
  TodosArray.push(TodoObj);
  localStorage.setItem("data", JSON.stringify(TodosArray));

  createTodo();
});
