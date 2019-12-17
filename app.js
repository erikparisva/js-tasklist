const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const filterInput = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");
console.log(clearBtn);

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
}
function addTask(event){
    if(taskInput.value === ''){
        alert('Enter a task');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '✗';
    li.appendChild(link);
    taskList.appendChild(li);

    taskInput.value = "";
    storeInLocalStorage(taskInput.value);

    event.preventDefault();
}
function removeTask(event){
    if(event.target.classList.contains('delete-item')){
        if(confirm('are u sure u wanna delete this bitch?')){
            event.target.parentElement.remove();
        }
    }
}
function clearTasks(){
    if(confirm('u sure u wanna delete all them bitches?')){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }   
}
function filterTasks(event){
    const userfilter = event.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task)){
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(userfilter) != -1){
            task.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    }
}
function storeInLocalStorage(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        task = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}