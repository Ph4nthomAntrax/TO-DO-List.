const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
};

console.log(btn);

btn.addEventListener("click", createTask);

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
