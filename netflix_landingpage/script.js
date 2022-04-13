const items = document.querySelectorAll('.item');
const contents = document.querySelectorAll('.out');

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.getElementsByClassName('active')[0].classList.remove('active');
        item.classList.add('active');

        contents.forEach(item => {
            item.classList.remove('show');
        })
        contents[index].className += ' show';
    })
})