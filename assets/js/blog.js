const backButton = document.querySelector('#back-button');

function generateBlogs() {

    // Grab the array of blogs to be generated on this page
    let blogs = JSON.parse(localStorage.getItem('blogPosts'));

    // for loop
    for (let i = 0; i < blogs.length; i++) {
        const posts = document.querySelector('.posts');

        const newDiv = document.createElement('div');
        const newH2 = document.createElement('h2');
        const newH3 = document.createElement('h3');
        const newP = document.createElement('p');

        let blogDiv = posts.appendChild(newDiv);
        let blogH2 = blogDiv.appendChild(newH2);
        let blogH3 = blogDiv.appendChild(newH3);
        let blogP = blogDiv.appendChild(newP);

        blogH2.textContent = blogs[i].title;
        blogH3.textContent = `Author: ${blogs[i].username}`;
        blogP.textContent = blogs[i].content;


    }

}

backButton.addEventListener('click', function () {
    // Go back to home page 
    window.location.href = './student-blog-site';
});

generateBlogs();