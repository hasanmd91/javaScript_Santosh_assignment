const form = document.querySelector("#form");
const posts = document.querySelector("#posts");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");

const createPosts = () => {
  let text = input.value;
  posts.insertAdjacentHTML(
    "beforeend",
    `     <div>
  <p>${text}</p>
  <span class="options">
    <i class="fa-solid fa-pen-to-square" onclick="editPosts()"></i>
    <i class="fa-sharp fa-solid fa-trash" onclick="deletePosts()">
    </i>
  </span>
</div>`
  );
};

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
