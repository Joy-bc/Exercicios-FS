let page = 1;
let limit = 3;

let currentPost = {};

const loadBtn = document.getElementById("load-btn");

loadBtn.style.display = "none";

loadBtn.addEventListener("click", () => {
  page++;
  showPosts();
});

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

function createPostsList(posts, htmlWrapperId) {
  const postsWrapper = document.getElementById(`${htmlWrapperId}`);

  posts.forEach(async (post) => {
    const userName = await fetchUser(`${post.userId}`);

    postsWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div class="divCard" id="post-${post.id}">
        <div class="divConteudo">
        <div class="divTitulo"><button class="open-modal" onclick="updateCurrentPost(${post.id}, "${post.title}", "${post.body}")"><h3 class="post-title">${post.title}</h3></button></div>
        <div class="divBody"><p>${post.body}</p></div>
        <div class="divUser"><p>${userName}</p></div>
        </div></div>
        `
    );
  });
}

const showPosts = async () => {
  const posts = await fetchPosts(page, limit);

  if (posts.length === Number(limit)) loadBtn.style.display = "flex";
  else loadBtn.style.display = "none";

  createPostsList(posts, "posts-whapper");
};

showPosts();

async function updateCurrentPost(postId, postTitle, postBody) {
  const comments = await fetchComents(postId);
  return (currentPost = {
    postId: postId,
    postTitle: postTitle,
    postBody: postBody,
    postComments: comments,
  });

  console.log(currentPost);
}
