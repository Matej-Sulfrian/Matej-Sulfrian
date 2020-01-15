var todos = [];
var inputDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    inputDOMElement.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            addTodo();
        }
    });
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todos[index_1].check + "'><i class='fas fa-check'></i></span>"
            + todos[index_1].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index_1 = 0; index_1 < todos.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
function updateCounter() {
    var unchecked = 0;
    for (var index_2 = 0; index_2 < todos.length; index_2++) {
        if (todos[index_2].check == false) {
            unchecked++;
        }
    }
    var checked = 0;
    for (var index_3 = 0; index_3 < todos.length; index_3++) {
        if (todos[index_3].check == true) {
            checked++;
        }
    }
    counterDOMElement.innerHTML = todos.length + " in total " + unchecked + " open " + checked + " done";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        var nwetask = {
            text: (inputDOMElement.value),
            check: false
        };
        todos.unshift(nwetask);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todos[index].check = !todos[index].check;
    drawListToDOM();
}
function deleteTodo(index) {
    todos.splice(index, 1);
    drawListToDOM();
}
/*----------------------------------------------*/
/*Voice Functions*/
/*Löschen*/
var placeHolder = "";
function deleteTodoByVoice() {
    for (var index_4 = 0; index_4 < todos.length; index_4++) {
        if (todos[index_4].text == placeHolder) {
            todos.splice(index_4, 1);
        }
    }
    drawListToDOM();
    console.log(placeHolder);
}
/*Checken*/
var placeHolder1 = "";
function checkTodoByVoice() {
    for (var index_5 = 0; index_5 < todos.length; index_5++) {
        if (todos[index_5].text == placeHolder1) {
            toggleCheckState(index_5);
            console.log(placeHolder);
        }
    }
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    var soFunktionierenGruppenAlso = [
        /*Aufgaben erstellen*/
        {
            indexes: ["erstelle Aufgabe *", "füge * hinzu"],
            smart: true,
            action: function (i, wildcard) {
                artyom.say("Aufgabe " + wildcard + ", wurde erstellt");
                inputDOMElement.value = wildcard;
                addTodo();
            }
        },
        /*Aufgabe löschen*/
        {
            indexes: ["lösche Aufgabe *", "lösche *"],
            smart: true,
            action: function (i, wildcard) {
                placeHolder = wildcard;
                deleteTodoByVoice();
                artyom.say("okay, " + wildcard + " löschen");
            }
        },
        /*Aufgabe checken*/
        {
            indexes: ["erledige Aufgabe *", "* erledig", "* doch nicht erledigt"],
            smart: true,
            action: function (i, wildcard) {
                placeHolder1 = wildcard;
                checkTodoByVoice();
                artyom.say("okay, " + wildcard + " ist erledigt");
            }
        }
    ];
    artyom.addCommands(soFunktionierenGruppenAlso);
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=script.js.map