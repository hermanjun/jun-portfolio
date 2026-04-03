
const blogList = document.getElementById("blog-list");

function renderPosts() {
    blogList,innerHTML = "";

    posts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.className = "post-card";

        postCard.innerHTML = `
            <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
            <p class="post-date">${post.date}</p>
        `;

        blogList.appendChild(postCard);
    });
}

function initBlogPage() {
    renderPosts();
    console.log("Blog page initialized");
}

initBlogPage();