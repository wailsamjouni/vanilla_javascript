window.addEventListener('load',() => {
    const formContainer = document.querySelector('.input-container');
    const input = document.querySelector('#input');
    const tasksContainer = document.querySelector('.tasks-container');
    const mytask = document.querySelector('.mytask');
    const addButton = document.querySelector('#add-button');

    input.addEventListener('input',()=>{
        if (input.value) {
            addButton.style.background = '#25d366'
        } else {
            addButton.style.background = '#ececec'
        }
    })


    formContainer.addEventListener('submit',(event) => {
        event.preventDefault();
        const userInput = input.value;

        if (!userInput) {
            alert('Please fill the field');
            return;
        } 
            mytask.innerHTML += `
            <div class="todo">
                <h4 class="title">${userInput}</h4>
                <div class="button1 button-container">
                    <i id="update" class="fas fa-pen-square"></i>
                    <h4>Edit</h4>
                </div>
                <div class="button2 button-container">
                    <i id="restore" class="fas fa-backspace"></i>
                    <h4>Restore</h4>
                </div>
                <div class="button3 button-container">
                    <i id="delete" class="fas fa-trash-alt"></i>
                    <h4>Delete</h4>
                </div>
            </div>
            `;

            input.value = '';
    })
});