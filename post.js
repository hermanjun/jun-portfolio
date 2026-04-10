const postDetail = document.getElementById("post-detail");

function getPostIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

function renderPostDetails() {
    const postId = getPostIdFromURL();
    const post = posts.find((item) => item.id === postId);

    if (!post) {
        postDetail.innerHTML = `
            <h1>Post not found</h1>
            <p>The article you are looking for does not exist.</p>
            <a href="blog.html">Back to Blog</a>
        `;
        return;
    }

    const paragraphsHTML = post.content
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

    postDetail.innerHTML = `
    <h1>${post.title}</h1>
    <p class="post-date">${post.date}</p>
    ${paragraphsHTML}
    <p><a href="blog.html">← Back to Blog</a></p>
    `;
}

function initPostPage() {
    renderPostDetails();
    console.log("Post page initialized");
}

initPostPage();