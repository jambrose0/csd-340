var taskList = new Array();

function addTask() {
    var task = document.getElementById("tasks");
    taskList.push(task.value);
    alert("Task: " + task.value + " added to list at index of: " + taskList.indexOf(task.value));
    
}

function showTask() {
    // console.log("Here is the array elements: ", taskList.toString());
    for(i = 0; i < taskList.length; i++) {
        console.log(taskList[i]);
        var list     = document.getElementById("agenda");
        var taskLine = document.createElement("li");
        taskLine.setAttribute('id', tasks.value)
        taskLine.appendChild(document.createTextNode(taskList[i]));
        list.appendChild(taskLine);
    }
}

function deleteTask() {
    var list = document.getElementById("agenda");
    list.removeChild(list.lastElementChild);
    


}