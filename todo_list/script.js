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

            const todoItem = document.createElement('div');
            todoItem.classList.add('todo');

            // Input field
            const taskInput = document.createElement('input');
            taskInput.classList.add('task-input');
            taskInput.setAttribute('readonly','readonly');
            taskInput.type = 'text';
            taskInput.value = userInput;
            todoItem.appendChild(taskInput);
            
            
             const updateDiv = document.createElement('div');
             updateDiv.classList += 'button1 button-container';

             const restoreDiv = document.createElement('div');
             restoreDiv.classList += 'button2 button-container';

             const deleteDiv = document.createElement('div');
             deleteDiv.classList += 'button3 button-container';

            const updateIcon = document.createElement('i');
            updateIcon.classList += 'fas fa-pen-square';
            updateIcon.setAttribute('id','update');
            const updateTitle = document.createElement('h4');
            updateTitle.innerHTML = 'Update';
            updateDiv.appendChild(updateIcon);
            updateDiv.appendChild(updateTitle);

            const restoreIcon = document.createElement('i');
            restoreIcon.classList += 'fas fa-backspace';
            restoreIcon.setAttribute('id','restore');
            const restoreTitle = document.createElement('h4');
            restoreTitle.innerHTML = 'Restore';
            restoreDiv.appendChild(restoreIcon);
            restoreDiv.appendChild(restoreTitle);

            const deleteIcon = document.createElement('i');
            deleteIcon.classList += 'fas fa-trash-alt';
            deleteIcon.setAttribute('id','delete');
            const deleteTitle = document.createElement('h4');
            deleteTitle.innerHTML = 'Delete';
            deleteDiv.appendChild(deleteIcon);
            deleteDiv.append(deleteTitle);

            todoItem.appendChild(updateDiv);
            todoItem.appendChild(restoreDiv);
            todoItem.appendChild(deleteDiv);
            tasksContainer.appendChild(todoItem);
            
            var button3 = document.querySelectorAll('.button3');
            button3.forEach(item => {
                item.addEventListener('click' ,function(){
                    this.parentNode.remove();
                })
            }
            );


            // tasksContainer.innerHTML += `
            // <div class="todo">
            //     <input class="task-input" type="text" readonly="readonly" value=${userInput}/>
            //     <div class="button1 button-container">
            //         <i id="update" class="fas fa-pen-square"></i>
            //         <h4>Edit</h4>
            //     </div>
            //     <div class="button2 button-container">
            //         <i id="restore" class="fas fa-backspace"></i>
            //         <h4>Restore</h4>
            //     </div>
            //     <div id="deletee" class="button3 button-container">
            //         <i id="delete" class="fas fa-trash-alt"></i>
            //         <h4>Delete</h4>
            //     </div>
            // </div>
            // `;

            input.value = '';
            addButton.style.background = '#ececec'
    })
});