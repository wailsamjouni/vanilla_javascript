const wrapper = document.querySelector('.wrapper');
const models = document.querySelectorAll('.modelItem');

models.forEach((model, index) => {
    model.addEventListener('click', () => {
        const active = document.getElementsByClassName('active');
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        active[0].className = active[0].className.replace(' active', '');
        model.className += ' active';
    });
})