const todoList = document.querySelector('#todo-list');
let flag = 0;

function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            for(let i = 0; i < 10; i += 2) {
                console.log(json[i].title);
                let listRow = document.createElement('li');
                let firstDiv = document.createElement('div');
                let secondDiv = document.createElement('div');

                let firstSpan = document.createElement('span');
                let secondSpan = document.createElement('span');

                let inputCheckbox = document.createElement('input');
                inputCheckbox.setAttribute("type", "checkbox");
                inputCheckbox.onclick = checkboxClicked;

                let deleteButton = document.createElement('button');
                deleteButton.setAttribute("type", "submit");
                deleteButton.setAttribute("class", "delete-btn");
                deleteButton.textContent = "X";
                deleteButton.onclick = deleteTodo;

                firstSpan.textContent = json[i].title;
                secondSpan.textContent = json[i+1].title;
                
                
                firstDiv.appendChild(inputCheckbox);
                firstDiv.appendChild(firstSpan);
                firstDiv.appendChild(deleteButton);
                firstDiv.setAttribute("class", "todo-div");
                
                secondDiv.appendChild(inputCheckbox);
                secondDiv.appendChild(secondSpan);
                secondDiv.appendChild(deleteButton);
                secondDiv.setAttribute("class", "todo-div");

                // listRow.appendChild(firstDiv.cloneNode(true));
                listRow.appendChild(firstDiv);
                listRow.appendChild(secondDiv);
                todoList.appendChild(listRow);
            }
    });
}

document.addEventListener('DOMContentLoaded', getTodos);

// delete button
const deleteTodo = (element) => {
    element.target.parentElement.remove();
}

const checkboxClicked = (element) => {
    element.target.parentElement.querySelector('span').classList.add('checkbox-clicked')
}


// add todo
const addInput = document.querySelector("#add-todo");
function addTodo(e) {
    console.log(addInput);
    if(addInput.value === "") alert("내용을 입력해주세요!");
    else {
        let listRow = document.createElement('li');
        let firstDiv = document.createElement('div');
        let firstSpan = document.createElement('span');
        let inputCheckbox = document.createElement('input');
        inputCheckbox.setAttribute("type", "checkbox");
        inputCheckbox.onclick = checkboxClicked;
    
        firstSpan.innerText = addInput.value;
    
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute("type", "submit");
        deleteButton.textContent = "X";
        deleteButton.onclick = deleteTodo;
    
        firstDiv.appendChild(inputCheckbox);
        firstDiv.appendChild(firstSpan);
        firstDiv.appendChild(deleteButton);
        firstDiv.setAttribute("class", "todo-div");
    
        if(flag%2 == 0) {
            listRow.appendChild(firstDiv);
            todoList.appendChild(listRow);
        } else {
            console.log(document.querySelector('li:last-child'));
            document.querySelector('li:last-child').appendChild(firstDiv)
        }
        addInput.value = '';
        flag++;
    }
    e.preventDefault();
} 
document.querySelector('form').addEventListener("submit", addTodo);




