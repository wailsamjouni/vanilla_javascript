setInterval(update, 1000);

const hoursID = document.getElementById('hrs');
const minutesID = document.getElementById('min');
const secondsID = document.getElementById('sec');

function setTheTime(elementToRotate, rotateDegree){
    elementToRotate.style.setProperty(
        '--rotate-degree', rotateDegree * 360);
}

 function update(){
    const date = new Date();
    const hoursRotateDegree = date.getHours() / 12;
    const minutesRotateDegree = date.getMinutes() /60;
    const secondsRotateDegree = date.getSeconds() / 60;
    setTheTime(hoursID,hoursRotateDegree)
    setTheTime(minutesID,minutesRotateDegree);
    setTheTime(secondsID,secondsRotateDegree);
}

update();