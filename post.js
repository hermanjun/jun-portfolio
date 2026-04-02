const posts = [
    {
        id: 1,
        title: "My First Blog Post",
        date: "2026-04-02",
        summary: "This is the first post on Herman's Digital World.",
        content: [
            "Welcome to my first blog post. This page is part of my portfolio project.",
            "I am building this website step by step while learning front-end development.",
            "My goal is to create a clean and functional digital space to present my projects and writing."
        ]
    },

    {
        id: 2,
        title: "Why I Started Learning JavaScript",
        date: "2026-04-02",
        summary: "A short reflection on why JavaScript matters in my Learning journey.",
        content: [
            "I started learning JavaScript because I want to make my website dynamic rather than static.",
            "Compared with pure HTML and CSS, JavaScript allows me to control behavior, render content, and build real interaction.",
            "Although it is challenging at the begining, I can already see how useful it is for building real projects."
        ]
    }
];

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

    const paragraphsHTML =post.content
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