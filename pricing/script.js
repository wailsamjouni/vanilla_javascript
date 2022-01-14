const container = document.getElementById('container');
const buttons = container.getElementsByClassName('btn');

for (let index = 0; index < buttons.length; index++){
    buttons[index].addEventListener('click',() => {
        var currentActive = document.getElementsByClassName('active');
        currentActive[0].className = currentActive[0].className.replace(' active','');
        buttons[index].classList += ' active';
    });
}