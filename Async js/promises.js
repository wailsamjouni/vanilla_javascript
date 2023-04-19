let posts = [];

for (let i = 1; i <= 10; i++) {
    let post = {
        id: i,
        title: `Post ${i}`,
        body: `This is the body of post ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sed nisl lobortis tempus. Quisque eleifend, purus vitae maximus aliquam, nibh nibh volutpat sapien, sit amet consectetur erat lorem sed nulla.`,
        author: `Author ${i}`,
        date: new Date(),
        likes: Math.floor(Math.random() * 100),
        comments: []
    };
    posts.push(post);
}

console.log(posts);

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error creating post');
            }
        }, 2000);
    });
};

// createPost({
//         id: 11,
//         title: 'Post 11',
//         body: 'This is the body of post 11. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sed nisl lobortis tempus. Quisque eleifend, purus vitae maximus aliquam, nibh nibh volutpat sapien, sit amet consectetur erat lorem sed nulla.',
//         author: 'Author 11',
//         date: new Date(),
//         likes: Math.floor(Math.random() * 100),
//         comments: []
//     })
//     .then(getPosts)
//     .catch(error => console.log(error));

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json());

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values));

// Async Await


// async function init() {
//     await createPost({
//         id: 11,
//         title: 'Post 11',
//         body: 'This is the body of post 11. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sed nisl lobortis tempus. Quisque eleifend, purus vitae maximus aliquam, nibh nibh volutpat sapien, sit amet consectetur erat lorem sed nulla.',
//         author: 'Author 11',
//         date: new Date(),
//         likes: Math.floor(Math.random() * 100),
//         comments: []
//     });

//     getPosts();
// }

// init();

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
}

fetchPosts();