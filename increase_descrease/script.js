var decrease = document.getElementById('decrease');
var reset = document.getElementById('reset');
var increase = document.getElementById('increase');
var number = document.getElementById('number');
let currentValue = 0;

decrease.addEventListener('click',function(){
    currentValue--;
    number.textContent = currentValue;
    if (currentValue < 0) {
        decrease.style.backgroundColor = '#DD1200';
        reset.style.backgroundColor = '#fff';
        increase.style.backgroundColor = '#fff';
        number.style.color = '#DD1200';
    }
    if (number.textContent == 0) {
        decrease.style.backgroundColor = '#fff';
        reset.style.backgroundColor = '#fff';
        increase.style.backgroundColor = '#fff';
        number.style.color = '#fff';
    }
})

reset.addEventListener('click',function(){
    currentValue = 0;
    number.textContent = currentValue;
    number.style.color = '#fff';
    decrease.style.backgroundColor = '#fff';
    reset.style.backgroundColor = '#fff';
    increase.style.backgroundColor = '#fff';
})

increase.addEventListener('click',function(){
    currentValue++;
    number.textContent = currentValue;
    if (currentValue > 0) {
        increase.style.backgroundColor = '#25D366';
        reset.style.backgroundColor = '#fff';
        decrease.style.backgroundColor = '#fff';
        number.style.color = '#25D366';
    }
    if (number.textContent == 0) {
        decrease.style.backgroundColor = '#fff';
        reset.style.backgroundColor = '#fff';
        increase.style.backgroundColor = '#fff';
        number.style.color = '#fff';
    }
})

// #59A7AC, #D0552E, fjfjfjfjfjf