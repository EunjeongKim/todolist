// let totalItems = 0;
let todoList = document.getElementById('todolist');
let doneList = document.getElementById('doneList');
let inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeydown = function (event) {
    if (event.which === 13) {
        let itemText = inputText.value;
        if (!itemText || itemText === "" || itemText === " ")
            return false;

        addNewItem(document.getElementById('todolist'), itemText);
        inputText.focus();
        inputText.select();
    }
}

function addNewItem(list, itemText) {
    let date = new Date();
    let id = '' + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    // totalItems++;
    let listItem = document.createElement('li');
    // listItem.innerText = itemText;
    listItem.id = 'li_' + id;
    listItem.ondblclick = moveItem;

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.onclick = updateItemStatus;
    checkBox.id = 'cb_' + id;

    let span = document.createElement('span');
    span.id = 'item_' + id;
    span.innerText = itemText;
    span.onclick = renameItem;

    let pencilIcon = document.createElement('i');
    pencilIcon.className = 'fas fa-pencil-alt';
    pencilIcon.id = 'pencilIcon_'+id;
    pencilIcon.onclick = renameItem;

    listItem.addEventListener('mouseover', mouseover);
    listItem.addEventListener('mouseout', mouseout);
    listItem.appendChild(pencilIcon);
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    list.appendChild(listItem);
}

function updateItemStatus() {
    //this = checkbox
    let chID = this.id.replace('cb_', '');
    let itemText = document.getElementById('item_' + chID);

    if (this.checked)
        itemText.className = 'checked';
    else
        itemText.className = '';
}


function renameItem() {
    let newItem = prompt('please enter item to change');
    if(!newItem || newItem === "" || newItem === " ")
        return false;
    
    let sapnID = this.id.replace('pencilIcon_', '');
    let span = document.getElementById('item_'+sapnID);
    span.innerHTML = newItem;
}

function removeItem() {
    this.style.display = 'none';
}

function moveItem() {
    let itemID = this.id.replace('li_', '');
    let item = document.getElementById('li_'+itemID);
    let itemParentID = item.parentElement;
    
    if(itemParentID === doneList){
        document.getElementById('cb_' + itemID).checked = false;
        todoList.appendChild(item);
    }
    else{
        document.getElementById('cb_' + itemID).checked = true;
        doneList.appendChild(item);
    }
    // document.getElementById('cb_' + itemID).checked = true;
    // doneList.appendChild(this);
}

function mouseover(){
    let pencilIconID = this.id.replace('li_', '');
    let aPencilIcon = document.getElementById('pencilIcon_'+pencilIconID);
    aPencilIcon.style.visibility = 'visible';
}

function mouseout(){
    let pencilIconID = this.id.replace('li_', '');
    let aPencilIcon = document.getElementById('pencilIcon_'+pencilIconID);
    aPencilIcon.style.visibility = 'hidden';
}