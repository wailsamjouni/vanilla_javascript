const colorsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A' ,'B' ,'C' ,'D' ,'E' ,'F']; 

const span = document.getElementById('span');
const button = document.getElementById('btn');

button.addEventListener('click',function(){
    let buildColor = '#';
    for(let i = 0; i < 6; i++){
        buildColor += colorsArray[generateNumber()];
    }
    span.textContent = buildColor;
    span.style.color = buildColor;
    document.body.style.backgroundColor = buildColor;
})

function generateNumber(){
    return Math.floor(Math.random() * colorsArray.length)
}

var color = document.getElementById('color');


window.addEventListener('mousemove',function(){
    let corX = window.event.clientX;
    let corY = window.event.clientY;
    console.log(corX);
    color.style.color = 'rgb(' + corX * 0.3 + ',' + corY * 0.3 + ',' + corX * 0.1 + ')';
});