import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTask } from "./readTasks.js";

export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const calendar = document.querySelector('[data-form-date]');
    const input = document.querySelector('[data-form-input]');
    let value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    const complete = false;

    if (value == '' || date == '') {
        return;
    }

    input.value = '';
    calendar.value = '';

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }
    list.innerHTML = '';
    //pipe js si no encuentra el primer elemento task solo define un arreglo
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList))
    displayTask();
}



export const createTask = ({ value, dateFormat, complete, id }) => {
    const task = document.createElement('li');
    task.classList.add('card');
    const check = checkComplete(id);
    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
        //console.log('completada',id);
    }

    const taskContent = document.createElement('div');
    taskContent.appendChild(check);
    const tittleTask = document.createElement('span');
    tittleTask.classList.add('task');
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));

    return task;
}; 
