
const posts = [
    { username: "John", content: "Hello, world! This is my first post." },
    { username: "Jane", content: "Just had an amazing dinner at a new restaurant." },];
    function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    const usernameElement = document.createElement('p');
    usernameElement.classList.add('username');
    usernameElement.innerText = post.username;
    const contentElement = document.createElement('p');
    contentElement.classList.add('content');
    contentElement.innerText = post.content;
    postElement.appendChild(usernameElement);
    postElement.appendChild(contentElement);
    postsContainer.prepend(postElement);
    }); }
    function handleFormSubmit(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username-input');
    const postInput = document.getElementById('post-input');
     const username =usernameInput.value.trim();
     const postContent = postInput.value.trim();
    if (username !== '' && postContent !== '') {
    const newPost = { username: username, content: postContent };
    posts.unshift(newPost);
    renderPosts();
    usernameInput.value = '';
    postInput.value = '';
    } }
    const postForm = document.getElementById('post-form');
    postForm.addEventListener('submit', handleFormSubmit);
    renderPosts();