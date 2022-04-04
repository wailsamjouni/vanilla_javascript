const wrapper = document.querySelector('.wrapper');
const models = document.querySelectorAll('.modelItem');

const products = [{
        id: 1,
        title: "Air Jordan",
        price: 135,
        colors: [{
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Force",
        price: 129,
        colors: [{
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Air Max",
        price: 149,
        colors: [{
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Mercurial",
        price: 99,
        colors: [{
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Blazer",
        price: 109,
        colors: [{
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
];

let currentProduct = products[0];
const productImage = document.querySelector('.product__image');
const productName = document.querySelector('.product__name');
const productPrice = document.querySelector('.product__price');
const productColor = document.querySelectorAll('.product__color');
const productSize = document.querySelectorAll('.product__size');


models.forEach((model, index) => {
    model.addEventListener('click', () => {
        const active = document.getElementsByClassName('active');
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        active[0].className = active[0].className.replace(' active', '');
        model.className += ' active';

        currentProduct = products[index];

        productName.textContent = currentProduct.title;
        productPrice.textContent = "$" + currentProduct.price;
        productImage.src = currentProduct.colors[0].img;

        productColor.forEach((color, index) => {
            color.style.backgroundColor = currentProduct.colors[index].code;
        })
    });
})

// Handle color click
productColor.forEach((color, index) => {
    color.addEventListener('click', () => {
        productImage.src = currentProduct.colors[index].img;
    });
})

// Handle size click
productSize.forEach(size => {
    size.addEventListener('click', () => {
        productSize.forEach(size => {
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        })
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
})