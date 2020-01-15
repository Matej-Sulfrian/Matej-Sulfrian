interface Todo {
    text: string;
    check: boolean;
}

var todos: Todo[] = [
];


var inputDOMElement: HTMLInputElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;


window.addEventListener("load", function (): void {

    inputDOMElement = document.querySelector("#inputTodo");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    inputDOMElement.addEventListener("keydown", function (event: any): void {
        if (event.keyCode === 13) {
            addTodo();
        }
    });

    drawListToDOM();
});


function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todos.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML = "<span class='check " + todos[index].check + "'><i class='fas fa-check'></i></span>"
            + todos[index].text +
            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function (): void {

            toggleCheckState(index);
        });

        todo.querySelector(".trash").addEventListener("click", function (): void {

            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}


function updateCounter(): void {

    let unchecked: number = 0;

    for (let index: number = 0; index < todos.length; index++) {
        if (todos[index].check == false) {
            unchecked++;
        }
    }

    let checked: number = 0;

    for (let index: number = 0; index < todos.length; index++) {
        if (todos[index].check == true) {
            checked++;
        }

    }

    counterDOMElement.innerHTML = todos.length + " in total " + unchecked + " open " + checked + " done";
}


function addTodo(): void {

    if (inputDOMElement.value != "") {

        let nwetask: Todo = {
            text: (inputDOMElement.value),
            check: false
        };
        todos.unshift(nwetask);

        inputDOMElement.value = "";

        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {

    todos[index].check = !todos[index].check;

    drawListToDOM();
}


function deleteTodo(index: number): void {

    todos.splice(index, 1);

    drawListToDOM();
}


/*----------------------------------------------*/
/*Voice Functions*/

/*Löschen*/
var placeHolder: string = "";

function deleteTodoByVoice(): void {

    for (let index: number = 0; index < todos.length; index++) {
        if (todos[index].text == placeHolder) {
            todos.splice(index, 1);
        }
    }

    drawListToDOM();

    console.log(placeHolder);
}

/*Checken*/
var placeHolder1: string = "";

function checkTodoByVoice(): void {

    for (let index: number = 0; index < todos.length; index++) {
        if (todos[index].text == placeHolder1) {
            toggleCheckState(index);
            console.log(placeHolder);
        }
    }

    drawListToDOM();
}

/*----------------------------------------------*/
/*Artymo Stuff*/
declare var Artyom: any;

window.addEventListener("load", function (): void {

    const artyom: any = new Artyom();

    var sprachbefehle: object = [

        /*Aufgaben erstellen*/
        {
            indexes: ["erstelle Aufgabe *", "füge * hinzu"],
            smart: true,
            action: function (i: any, wildcard: string): void {

                artyom.say("Aufgabe " + wildcard + ", wurde erstellt");

                inputDOMElement.value = wildcard;

                addTodo();
            }
        },
        /*Aufgabe löschen*/
        {
            indexes: ["lösche Aufgabe *", "lösche *"],
            smart: true,
            action: function (i: any, wildcard: string): void {

                placeHolder = wildcard;

                deleteTodoByVoice();

                artyom.say("okay, " + wildcard + " löschen");
            }
        },
        /*Aufgabe checken*/
        {
            indexes: ["erledige Aufgabe *", "* erledig", "* doch nicht erledigt"],
            smart: true,
            action: function (i: any, wildcard: string): void {

                placeHolder1 = wildcard;

                checkTodoByVoice();

                artyom.say("okay, " + wildcard + " ist erledigt");
            }
        }
    ];


    artyom.addCommands(sprachbefehle);


    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }

    startContinuousArtyom();

});