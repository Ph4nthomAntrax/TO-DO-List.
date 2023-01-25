import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) =>{
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const calendar = document.querySelector('[data-form-date]');
    const input = document.querySelector('[data-form-input]');

    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    let value = input.value;
    
    input.value = '';
    calendar.value = '';

    const taskObj = {
        value,
        dateFormat
    }

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push({value,dateFormat});
    localStorage.setItem("tasks", JSON.stringify(taskList));

    const task =createTask(taskObj);
    list.appendChild(task);
}



export const createTask = ({value, dateFormat}) => {
    const task = document.createElement('li');
    task.classList.add('card');
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement('span');
    tittleTask.classList.add('task');
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    
    return task;
}; 
