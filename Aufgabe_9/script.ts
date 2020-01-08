var todos: string [] = [];

function numberOfTasks (): void {
    document.querySelector(".numberoftasks").innerHTML = todos.length + 1 + " in total";
}

function buildTask (): void {
    var uncheck: string = "fa-circle";
    var circle: string = "<div class='tasks'><i class='far " + uncheck + "' id='check'></i>";
    var newtask: string = (<HTMLInputElement>document.querySelector(".newtasks")).value;
    todos.push(circle + newtask);
    document.querySelector(".todos").innerHTML +=  todos.slice(-1)[0];
}

function trash(): void {
    console.log(todos);
    todos.pop();
    document.querySelector(".todos").innerHTML = todos;
    document.querySelector(".numberoftasks").innerHTML = todos.length + " in total";
}


window.addEventListener("load", function(): void {
    document.querySelector(".addTask").addEventListener("click", numberOfTasks);
    document.querySelector(".addTask").addEventListener("click", buildTask);
    document.querySelector("#delete").addEventListener("click", trash);
});