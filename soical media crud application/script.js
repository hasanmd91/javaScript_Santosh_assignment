const form = document.querySelector("#form");
const post = document.querySelector("#post");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");

const createPosts = () => {};

const formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = `Posts cannot be empty!`;
  } else {
    createPosts();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});
