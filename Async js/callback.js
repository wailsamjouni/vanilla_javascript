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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

// getPosts();

createPost({
    id: 11,
    title: 'Post 11',
    body: 'This is the body of post 11. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sed nisl lobortis tempus. Quisque eleifend, purus vitae maximus aliquam, nibh nibh volutpat sapien, sit amet consectetur erat lorem sed nulla.',
    author: 'Author 11',
    date: new Date(),
    likes: Math.floor(Math.random() * 100),
    comments: []
}, getPosts);