const username = document.getElementById('#username');
const title = document.getElementById('#title');
const content = document.getElementById('#content');




const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function (event) {

    // Get textContent from inputs
    const postUsername = document.querySelector('#post-username');
    const postTitle = document.querySelector('#post-title');
    const postContent = document.querySelector('#post-content');

    console.log(postUsername);

    // Check for empty fields
    if (postUsername.value === "") {
        return alert("Please enter a valid username!");
    }

     else if (postTitle.value === "") {
        return alert("Please enter a valid title!");
    }

    else if (postContent.value === "") {
        return alert("Please enter some exciting content!");
    }

    // Create object for inputs
    const blogPost = {
        username: postUsername.value,
        title: postTitle.value,
        content: postContent.value
    };

    

    // Create an array to store each object and store that array in local instead
    let blogArray = JSON.parse(localStorage.getItem('blogPosts'));
    console.log(blogArray);

    // Add to or correctly initialize the array
    if (blogArray) {
        blogArray.push(blogPost);
    }

    else if (!blogArray) {
        blogArray = [blogPost];
    }

    // Store blogPost into local storage
    localStorage.setItem('blogPosts', JSON.stringify(blogArray));
    window.location.href = './blog.html';
    
});



