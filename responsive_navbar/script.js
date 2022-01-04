const iconElement = document.querySelector('.box');
const list = document.querySelector('.list');
const linkElements = document.querySelectorAll('.list li');

iconElement.addEventListener('click',function(){
    list.classList.toggle('navbar-active')
    linkElements.forEach((element, index) =>{
        element.style.animation = `myAnimation 1s ease forwards ${index / 2}s`;
    });

    iconElement.classList.toggle('switch');

});
