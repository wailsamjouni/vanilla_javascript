const container = document.querySelector(".container");
const divElement = document.querySelector(".data");
const fetched = document.getElementById("fetch");
const posts = document.querySelector(".posts");
const photos = document.querySelector(".photos");
const users = document.querySelector(".users");
const todos = document.querySelector(".todos");

// Attach the Eventlistener
posts.addEventListener("click",getPosts)
// photos.addEventListener("click",getPhotos)
// users.addEventListener("click",getUsers)
// todos.addEventListener("click",getTodos)

function getPosts(){
    setTimeout(() =>{
        divElement.innerHTML = "";
        fetched.innerHTML = "There is now no fetched Data";
        posts.innerHTML = "Fetching starts..."
        posts.style.backgroundColor = "white";
        posts.style.color = "orange";
    },400)

    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                let result = `
                <div class="data-element">
                    <h2>User ${post.userId}</h2>
                    <h2>Title: ${post.title}</h2>
                    <p>${post.body}</p>
                </div>
                `
                divElement.innerHTML += result;
            })
        })
        
    },2000)

    setTimeout(() => {
        posts.innerHTML = "Fetching is done"
        fetched.innerHTML = "The data is loaded from the server"
    },2400)

    setTimeout(() => {
        posts.innerHTML = "Posts"
        posts.style.backgroundColor = "orange";
        posts.style.color = "black";
    },2800)
}