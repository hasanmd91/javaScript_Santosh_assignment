const form = document.querySelector("#form");
const posts = document.querySelector("#posts");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");

let deletePosts = (e) => {
  e.parentElement.parentElement.remove();
};

let editPosts = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

const createPosts = () => {
  posts.insertAdjacentHTML(
    "afterbegin",
    `     <div>
  <p>${input.value}</p>
  <span class="options">
    <i class="fa-solid fa-pen-to-square" onclick="editPosts(this)"></i>
    <i class="fa-sharp fa-solid fa-trash" onclick="deletePosts(this)">
    </i>
  </span>
</div>`
  );

  form.reset();
};

const formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = `Posts cannot be empty!`;
  } else {
    msg.innerHTML = "";
    createPosts();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});
