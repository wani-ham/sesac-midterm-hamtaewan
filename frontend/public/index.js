const todoList = document.querySelector('#todo-list');

function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            for(let i = 0; i < 10; i += 2) {
                console.log(json[i].title);
                let listRow = document.createElement('li');
                let firstSpan = document.createElement('span');
                let secondSpan = document.createElement('span');
                firstSpan.textContent = json[i].title;
                secondSpan.textContent = json[i+1].title;
                listRow.appendChild(firstSpan);
                listRow.appendChild(secondSpan);
                todoList.appendChild(listRow);
            }
    });
}

document.addEventListener('DOMContentLoaded', getTodos);


