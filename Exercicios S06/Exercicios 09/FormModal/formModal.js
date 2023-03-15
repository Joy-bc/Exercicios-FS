import { showPosts } from "../Modules/domControler.js";

function updateModal(currentPost) {
  const title = document.querySelector("#postTitle h3");
  const body = document.querySelector("#postBody p");
  const comments = document.querySelector("#comentsContainer");

  title.innerHTML = `${currentPost.title}`;
  body.innerHTML = `${currentPost.body}`;

  currentPost.comments.forEach((comment) => {
    comments.insertAdjacentHTML(
      "beforeend",
      `<div id="post-comment">
       <h5 id="post-comment-title"> ${comment.name}</h5>
       <span id="post-comment-user">${comment.email}</span>
       <p id="post-comment-body">${comment.body}</p>
      </div>
    `
    );
  });
}

export { updateModal };
