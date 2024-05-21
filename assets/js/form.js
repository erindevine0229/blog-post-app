
// submits form on click of button

const submitButton = document.getElementById('submit-btn');


submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('username-box').value;
    const title = document.getElementById('title-box').value;
    const content = document.getElementById('content-box').value;

    if(username === "" || title === "" || content === "") {
    window.alert("Please enter all required fields");
    return;

}


const blogPost = {
    username: username,
    title: title,
    content: content,
};

const postsArray= [{"Blog Post": blogPost}];

// postsArray.push(blogPost);

const stringifiedArray = JSON.stringify(postsArray);
localStorage.setItem("Blog Posts", stringifiedArray);

 window.location.href = "blog.html";

});

