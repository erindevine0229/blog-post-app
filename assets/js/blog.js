

// Gives functionality to the back button to navigate back to index.html
const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function() {
        document.location.href = "index.html";
    });

// Gets array from local storage and converts back to objects via JSON parse
const storedpostsArray = localStorage.getItem("Blog Posts");
const postsArray = JSON.parse(storedpostsArray);


// Creates new blog post in the blog browser page by accessing each item from the stored values and appending the a new HTML element
console.log(postsArray);

const updateBlog = function () {

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

      //  Appends the whole blog container to the page 
       document.body.main.appendChild(blogContainer);
   
}  

//  calling the function
updateBlog();







