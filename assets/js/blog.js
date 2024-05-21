
// Gets array from local storage and converts back to objects via JSON parse
const storedpostsArray = localStorage.getItem("Blog Posts");
const postsArray = JSON.parse(storedpostsArray);


// Creates new blog post in the blog browser page
console.log(postsArray);

const updateBlog = function (event) {
   event.preventDefault();

   const blogContainer = document.getElementById("blog-container");
   for (let i=0; i < postsArray.length; i++) {
      
      const postContainer = document.createElement("div");
      postContainer.classList.add("blog-boxes");
      
         const titleEl = document.createElement("h2");
         titleEl.textContent = postsArray[i].title;
         postContainer.append(titleEl);
         
         const contentEl = document.createElement("p");
         contentEl.textContent = postsArray[i].content;
         postContainer.append(contentEl);
         
         
         const usernameEl = document.createElement("h3");
         usernameEl.textContent = `Posted by: ${postsArray[i].username}`;
         postContainer.append(usernameEl);

         blogContainer.append(postContainer);
         
       }
       document.body.appendChild(blogContainer);
   
}  

console.log(titleEl);
console.log(usernameEl);
console.log(contentEl);

// Checks if any information was entered into the array first
const checkArray = function(postsArray) {
   if (postsArray !== '' &&  postsArray !== null) {
      const blogPosts = [];

      for (let i=0; i < postsArray.length; i++) {
         
         const newPost = {
            title: postsArray[i].title,
            username: postsArray[i].username,
            content: postsArray[i].content,
         };
      blogPosts.push(newPost);
      } 
      updateBlog(blogPosts);
   }   
   else {
      console.log("Sorry, not able to find posts in storage!");
      return;
   }
};
       


// Gives functionality to the back button to navigate back to index.html
const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function() {
        document.location.href = "index.html";
    });





