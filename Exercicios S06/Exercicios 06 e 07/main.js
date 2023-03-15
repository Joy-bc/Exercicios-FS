const fetchPosts = () =>
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20`).then(
    (res) => res.json()
  );

function createPostsList(posts, htmlWrapperId) {
  const postsWrapper = document.getElementById(`${htmlWrapperId}`);

  posts.forEach((post) => {
    postsWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div class="divCard" id="${post.id}">
        <div class="divConteudo">
        <div class="divTitulo"><h3>${post.title}</h3></div>
        <div class="divBody"><p>${post.body}</p></div>
        <div class="divUser"><p>${post.userId}</p></div>
        </div></div>
        `
    );
  });
}

const showPosts = async () => {
  const posts = await fetchPosts();

  createPostsList(posts, "posts-whapper");
};

showPosts();
