const bodyElement = document.querySelector('.body');
const iconsContainer = document.querySelectorAll('.container');
const icons = document.querySelectorAll('.icons');
const sections = document.querySelectorAll('.section');

icons.forEach(element => {
    element.addEventListener('click', () => {
        const active = document.getElementsByClassName('active');
        active[0].className = active[0].className.replace(' active', '');
        element.className += ' active';
    });
})

function handleBodyClick() {
    bodyElement.addEventListener('click', (event) => {
        const clickedElement = event.target.dataset.id;
        if (clickedElement) {
            // iconsContainer.forEach(icon => {
            //     icon.classList.remove('activeSection');
            // });
            event.target.classList.add('activeSection');
            sections.forEach(section => {
                section.classList.remove('activeSection');
            })
            document.getElementById(clickedElement).classList.add('activeSection');
        }
    })
}

handleBodyClick();