var todos = [];
function numberOfTasks() {
    document.querySelector(".numberoftasks").innerHTML = todos.length + 1 + " in total";
}
function buildTask() {
    var uncheck = "fa-circle";
    var circle = "<div class='tasks'><i class='far " + uncheck + "' id='check'></i>";
    var newtask = document.querySelector(".newtasks").value;
    todos.push(circle + newtask);
    document.querySelector(".todos").innerHTML += todos.slice(-1)[0];
}
function trash() {
    console.log(todos);
    todos.pop();
    document.querySelector(".todos").innerHTML = todos;
    document.querySelector(".numberoftasks").innerHTML = todos.length + " in total";
}
window.addEventListener("load", function () {
    document.querySelector(".addTask").addEventListener("click", numberOfTasks);
    document.querySelector(".addTask").addEventListener("click", buildTask);
    document.querySelector("#delete").addEventListener("click", trash);
});
//# sourceMappingURL=script.js.map