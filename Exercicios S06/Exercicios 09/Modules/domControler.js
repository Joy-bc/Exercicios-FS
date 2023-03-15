import { toggleModal } from "../main.js";
import { fetchPosts, fetchUser, updateCurrentPost } from "./utils.js";

let page = 1;
let limit = 3;

const loadBtn = document.getElementById("load-btn");

loadBtn.addEventListener("click", () => {
  page++;
  showPosts();
});

function createPostsList(posts, htmlWrapperId) {
  const postsWrapper = document.getElementById(`${htmlWrapperId}`);

  posts.forEach(async (post) => {
    const userName = await fetchUser(`${post.userId}`);

    postsWrapper.insertAdjacentHTML(
      "beforeend",
      `
          <div class="divCard" id="post-${post.id}">
          <div class="divConteudo">
          <div class="divTitulo"><button class="open-modal" onclick="updateCurrentPost(${
            post.id
          }, '${post.title.replaceAll("\n", " ")}', '${post.body.replaceAll(
        "\n",
        " "
      )}')"><h3 class="post-title">${post.title}</h3></button></div>
          <div class="divBody"><p>${post.body}</p></div>
          <div class="divUser"><p>${userName}</p></div>
          </div></div>
          `
    );

    document
      .querySelector(`#post-${post.id} .open-modal`)
      .addEventListener("click", toggleModal);
  });
}

const showPosts = async () => {
  const posts = await fetchPosts(page, limit);

  if (posts.length === Number(limit)) loadBtn.style.display = "flex";
  else loadBtn.style.display = "none";

  createPostsList(posts, "posts-whapper");

  console.log(posts);
};

export { showPosts };
