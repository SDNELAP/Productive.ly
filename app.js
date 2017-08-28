/**
 * Created by Nelapatla on 8/27/17.
 */
var tasks = [];

function addNewTask(newTaskText){
    console.log("Entered Function");
    tasks.push(newTaskText);

    var task_list = document.getElementById('task_list');
    var new_element = document.createElement("li");

    new_element.innerHTML = newTaskText;
    task_list.appendChild(new_element);

    var input_field = document.getElementById("input_field");
    input_field.value = input_field.defaultValue;
}
