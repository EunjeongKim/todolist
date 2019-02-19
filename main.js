let btnNew = document.getElementById('btnAdd');
btnNew.onclick = addNewItem;

function addNewItem(){
    let listItem = document.createElement('li');
    listItem.innerText = "Hello";

    let list = document.getElementById('todolist');
    list.appendChild(listItem);
}