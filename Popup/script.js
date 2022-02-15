const button = document.querySelector('.show-element');
const message = document.querySelector('.message');
const iconcontainer = document.querySelector('.iconcontainer');
const overlay = document.querySelector('.overlay');

const hidePopup = () => {
    message.classList.add('hidden');
    overlay.classList.add('hidden');
}

button.addEventListener('click', () => {
    message.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

iconcontainer.addEventListener('click', () => {
    hidePopup();
})

overlay.addEventListener('click', () => {
    hidePopup();
})
