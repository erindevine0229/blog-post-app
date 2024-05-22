
// targets the buttom element in HTML

const submitButton = document.getElementById('submit-btn');

// collects the input information from the HTML form and assins variables
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('username-box').value;
    const title = document.getElementById('title-box').value;
    const content = document.getElementById('content-box').value;

    // Failsafe to make sure all information is entered prior to submitting
    if(username === "" || title === "" || content === "") {
    window.alert("Please enter all required fields");
    return;

}

// Creates an onject out of the variables collected
const blogPost = {
    username: username,
    title: title,
    content: content,
};

const postsArray= JSON.parse(localStorage.getItem("Blog Posts")) || []; 

console.log(postsArray);
postsArray.push(blogPost);

// stores an array of objects into local storage, using JSON
localStorage.setItem("Blog Posts", JSON.stringify(postsArray));

// submits form on click of button
 window.location.href = "blog.html";

});

