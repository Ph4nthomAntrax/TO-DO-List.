import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector('[data-form-btn]');


const addTask = (evento) =>{
    const list = document.querySelector('[data-list]');
    const task =createTask(evento);
    list.appendChild(task);
}


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    let value = input.value;
    const calendar = document.querySelector('[data-form-date]');
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    console.log(dateFormat);
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add('card');

    input.value = '';
    
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement('span');
    tittleTask.classList.add('task');
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    console.log(dateElement);
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    
    return task;


};

btn.addEventListener("click", addTask);

