const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener("click",deleteTask);
    return i;
}
const deleteTask = (event) => {
    //console.log('deleteTask');
    //obtenemos acceso al objetivo y este nos da acceso al elemento padre que es el li o la tarjeta
    const parent = event.target.parentElement;
    parent.remove();
} 

export default deleteIcon;