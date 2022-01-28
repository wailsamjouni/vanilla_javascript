const divElement = document.querySelector(".data");
const fetched = document.getElementById("fetch");
const posts = document.querySelector(".posts");
const photos = document.querySelector(".photos");
const users = document.querySelector(".users");
const todos = document.querySelector(".todos");
const dataDiv = document.querySelector(".data");

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
                    <h2>User ${post.id}</h2>
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

// /////////////////////////////////////////////////
//              Find Post By ID

window.addEventListener("load", () => {

    const input = document.getElementById("input");
    const form = document.querySelector(".user-input");
    const button = document.querySelector(".submit");

    input.addEventListener('input',()=>{
        if (input.value) {
            button.style.background = 'white'
        } else {
            button.style.background = 'black'
        }
    })

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        if(!input.value){
            alert("Please enter an ID");
        }

        if(input.value > 0 && input.value <= 100){
            fetch(`https://jsonplaceholder.typicode.com/posts/${input.value}`)
        .then(response => response.json())
        .then(post => {
            let result = `
                <div class="data-element">
                    <h2>User ${post.id}</h2>
                    <h2>Title: ${post.title}</h2>
                    <p>${post.body}</p>
                </div>
                `
                divElement.innerHTML = result;
        })
        .catch(error => console.log(error))
        input.value = "";
        button.style.background = 'black'
        input.style.background = "orange"
        }
        else{
            input.style.background = "red"
        }

    })
})
///////////////////////////////////////////////////