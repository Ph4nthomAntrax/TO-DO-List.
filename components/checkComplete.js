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
export default checkComplete;