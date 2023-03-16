import { updateModal } from "../FormModal/formModal.js";

let currentPost = {};

const fetchPosts = (page, limit) =>
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  ).then((res) => res.json());

const fetchUser = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((resJson) => resJson.name);

const fetchComents = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(
    (res) => res.json()
  );

async function updateCurrentPost(postId, postTitle, postBody) {
  const comments = await fetchComents(postId);
  currentPost = {
    id: postId,
    title: postTitle,
    body: postBody,
    comments: comments,
  };

  updateModal(currentPost);

  console.log(currentPost);
}

export { fetchPosts, fetchUser, updateCurrentPost };
