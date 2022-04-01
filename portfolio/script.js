const bodyElement = document.querySelector('.body');
const iconsContainer = document.querySelectorAll('.container');
const icons = document.querySelectorAll('.icons');
const sections = document.querySelectorAll('.section');

/////////////////////////////////////////////////////////////////////
//////////////////////////////Tables////////////////////////////////
const colorsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colors = ['#216869', '#49A078', '#BA3F1D', '#FFBC42', '#1B998B', '#06d6a0', '#ff8fa3', '#ff206e', '#ff7d00', '#01befe'];

/////////////////////////////////////////////////////////////////////
///////////////////////////Function Ready///////////////////////////
const hidePopup = () => {
    palette.classList.add('hidden');
    overlay.classList.add('hidden');
}

const showPopup = () => {
        palette.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    ////////////////////////////////////////////////////////////////////////

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

// ////////////////////////////////////////////////////////////////////////
// /////////////////////////////Cursor///////////////////////////////////////
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (event) => {
    cursor.setAttribute(
        "style",
        "top: " + (event.pageY + 10) + "px; left: " + (event.pageX + 10) + "px;");
})

document.addEventListener('click', () => {
        cursor.classList.add('cursorClicked');
        setTimeout(() => {
            cursor.classList.remove('cursorClicked');
        }, 300)
    })
    // ////////////////////////////////////////////////////////////////////////
    // /////////////////////////Theme///////////////////////////////////////////////
const theme = document.querySelector('.theme');
theme.addEventListener('click', () => {
        theme.classList.toggle('toggle');
        document.body.classList.toggle('light__mode');

    }) // ////////////////////////////////////////////////////////////////////////
    // /////////////////////////Palette Color///////////////////////////////////////
const paletteToggle = document.querySelectorAll('.palette__toggle');

paletteToggle.forEach((color, index) => {
    color.addEventListener('click', () => {
        document.documentElement.style.setProperty('--color-secondary', colors[index]);
        hidePopup();
    });
})

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Overlay Setting/////////////////////////////////
const setting = document.querySelector('.setting');
console.log(setting);
const palette = document.querySelector('.palette');
const paletteClose = document.querySelector('.palette__close');
const overlay = document.querySelector('.overlay');

setting.addEventListener('click', () => {
    showPopup();
})

paletteClose.addEventListener('click', () => {
    hidePopup();
})

overlay.addEventListener('click', () => {
    hidePopup();
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (!palette.classList.contains('hidden')) {
            hidePopup();
        }
    }
})

//////////////////////////////////////////////////////////////////////////
//////////////////////////Randomize Theme////////////////////////////////
const randomTheme = document.getElementById('randomize');
randomTheme.addEventListener('click', () => {
    let buildColor = '#';
    for (let i = 0; i < 6; i++) {
        buildColor += colorsArray[generateNumber()];
        document.documentElement.style.setProperty('--color-secondary', buildColor);
    }

})

function generateNumber() {
    return Math.floor(Math.random() * colorsArray.length)
}