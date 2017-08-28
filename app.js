/**
 * Created by Nelapatla on 8/27/17.
 */
var taskList = [];

function addNewTask(newTask){
    console.log("hi");
    taskList.push(newTask);
    var taskListElement = document.getElementById("task_list");
    var newTaskElement = document.createElement("li");

    newTaskElement.appendChild(document.createTextNode(newTask));
    taskListElement.appendChild(newTaskElement);
}


