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
                deleteButton.textContent = "X";
                deleteButton.onclick = deleteTodo;

                firstSpan.textContent = json[i].title;
                secondSpan.textContent = json[i+1].title;
                
                firstDiv.appendChild(inputCheckbox);
                firstDiv.appendChild(firstSpan);
                firstDiv.appendChild(deleteButton);
                
                secondDiv.appendChild(inputCheckbox);
                secondDiv.appendChild(secondSpan);
                secondDiv.appendChild(deleteButton);

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
const addInput = document.querySelector("form");
addInput.addEventListener("submit", (e) => {
    console.log(addInput.value);

    let listRow = document.createElement('li');
    let firstDiv = document.createElement('div');
    let firstSpan = document.createElement('span');
    let inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute("type", "checkbox");

    firstSpan.innerText = addInput.value;

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute("type", "submit");
    deleteButton.textContent = "X";
    deleteButton.onclick = deleteTodo;

    firstDiv.appendChild(inputCheckbox);
    firstDiv.appendChild(firstSpan);
    firstDiv.appendChild(deleteButton);

    if(flag%2 == 0) {
        listRow.appendChild(firstDiv);
        todoList.appendChild(listRow);
    } else {
        listRow.appendChild(firstDiv);
    }
    
    flag++;
    e.preventDefault();
});




