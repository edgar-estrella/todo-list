let todoList = [];

function add(){
    let todo = document.getElementById("todo-input").value;
    todoList.push(todo);
    document.getElementById("todo-input").value = "";
    addToDom(todo);
}

function remove(){
    
}

function addToDom(todo){
    let container = document.getElementById("todo-list");
    let item = document.getElementById("todo-list-placeholder").cloneNode(true);
    item.innerHTML = todo;
    item.classList.add("todo-list-placeholder");
    container.appendChild(item);
}
