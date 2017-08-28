/**
 * Created by Nelapatla on 8/27/17.
 */

function addNewTask(newTaskText){
    var task_list = document.getElementById('task_list');
    var new_element = document.createElement("li");

    new_element.innerHTML = newTaskText;
    task_list.appendChild(new_element);

    var input_field = document.getElementById("input_field");
    input_field.value = input_field.defaultValue;
}
