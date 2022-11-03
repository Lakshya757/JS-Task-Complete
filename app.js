window.addEventListener('load',()=>{//start when the page loads
    const form = document.querySelector('#task-form')
    const input = document.querySelector('#task-input')
    const list = document.querySelector('#tasks')

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input.value//get value of add input
        
        const task_element = document.createElement('div') //create a task card element
        task_element.classList.add('task')//give each task card element a class called 'task'

        const task_content_element = document.createElement('div')//create a subclass for the element- taskcard which holds all the content within the card
        task_content_element.classList.add('content')//give the subclass a class

        task_element.appendChild(task_content_element)//puts the subclass- inside the card class

        const task_text_element = document.createElement('p')//create a text (<p>) element which holds the input text(task)
        task_text_element.classList.add('text')//give the text element a class called 'text'
        // task_text_element.innerText = "task"//puts the input text(task) inside the text element(p)
        document.querySelector("p").innerText = task



        task_content_element.appendChild(task_text_element)//puts the text element(p) inside the content div/class

        const task_action_element = document.createElement('div')//create a element 'action' which holds all the actions (check & delete)
        task_action_element.classList.add('actions')//give the action element a class called 'actions'
        
        const task_checked_element = document.createElement('button')//create a button element which is used to check/complete the task
        task_checked_element.classList.add('check')//gives the button element a class called 'check'
        task_checked_element.innerText = 'check'//give the button a text/icon

        const task_delete_element = document.createElement('button')//create a button element which is used to delete a task
        task_delete_element.classList.add('delete')//gives the button element a class called 'delete'
        task_element.innerText = 'Delete'//give the button a text/icon

        task_action_element.appendChild(task_checked_element)
        task_action_element.appendChild(task_delete_element)

        task_element.appendChild(task_action_element)
        list.appendChild(task_element)

        input.value = '';


        task_checked_element.addEventListener('click', (e)=>{
            if(task_checked_element.innerText.toLowerCase() == 'check'){
                document.querySelector("p").style["textDecoration"] = 'line-through'
            }
        })

        task_delete_element.addEventListener('click', (e)=>{
            list.removeChild(task_element)
        })

    })
})