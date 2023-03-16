import { showPosts } from "./Modules/domControler.js";
import { updateCurrentPost } from "./Modules/utils.js";

window.updateCurrentPost = (postId, postTitle, postBody) =>
  updateCurrentPost(postId, postTitle, postBody);

const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

[closeModalBtn, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

export { toggleModal };

showPosts();
