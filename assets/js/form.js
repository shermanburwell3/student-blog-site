const username = document.getElementById('#username');
const title = document.getElementById('#title');
const content = document.getElementById('#content');




const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function () {

    // Get textContent from inputs
    const postUsername = document.querySelector('#post-username').textContent;
    const postTitle = document.querySelector('#post-title').textContent;
    const postContent = document.querySelector('#post-content').textContent;

    // Create object for inputs
    const blogPost = {
        username: postUsername,
        title: postTitle,
        content: postContent
    };

    // VVV For testing purposes only VVV
    console.log(blogPost);
    preventDefault();
    // ^^^ For testing purposes only ^^^
});

// Store blogPost into local storage

