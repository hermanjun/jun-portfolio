const homeBlogList = document.getElementById("blog-list");

function renderHomeBlogPosts() {
  if (!homeBlogList) return;

  const sortedPosts = [...posts].sort(
    (a, b) => b.id - a.id
  );

  homeBlogList.innerHTML = "";

  sortedPosts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";

    postCard.innerHTML = `
      <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
      <p class="post-date">${post.date}</p>
    `;

    homeBlogList.appendChild(postCard);
  });
}

function initApp() {
  renderHomeBlogPosts();
  console.log("App initialized");
}

initApp();