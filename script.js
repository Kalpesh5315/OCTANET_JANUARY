// JavaScript code for the ToDo List app

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var listItem = document.createElement('li');
    listItem.innerHTML = `
        ${taskInput.value}
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function removeTask(button) {
    var listItem = button.parentNode;
    var taskList = listItem.parentNode;

    taskList.removeChild(listItem);
}