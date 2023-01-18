//inicia IIFE
(() => {const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add('card');

    input.value = '';
    //backticks
    //console.log(checkComplete);
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement('span');
    tittleTask.classList.add('task');
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);
    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    //es implementado al final del nodo, 
    //para colocar un nodo hijo dentro del nodo padre
    task.appendChild(taskContent);
    list.appendChild(task);

    //console.log(content);
};

//console.log(btn);

btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}
// Inmediatly invoked functions expression o IIFE
const completeTask = (event) => {
    const element = event.target;
    //metodo toggle para verificar si existe o no una clase
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}
})//termina la IIFE// 
();// los parentecis son para llamar al la iiffe
//listener
//btn.addEventListener("click", function(evento){
    //evento.preventDefault();
    //const input = document.querySelector('[data-form-input]');
    //console.log(input.value);
//});


//arrow functions / funciones flecha o funciones anonimas
//btn.addEventListener("click", (evento) => {
    //evento.preventDefault();
    //const input = document.querySelector('[data-form-input]');
    //console.log(input.value);
//});
