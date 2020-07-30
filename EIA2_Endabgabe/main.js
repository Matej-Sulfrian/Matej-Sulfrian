"use strict";
var Picture;
(function (Picture) {
    window.addEventListener("load", handelLoad);
    let figures = [];
    let figure;
    let canvasTarget;
    let circle;
    let circlein;
    let triangle;
    let trianglein;
    let square;
    let squarein;
    let v;
    let r;
    let c;
    let s;
    let sizex;
    let sizey;
    let bg;
    let background;
    let save;
    let restore;
    function handelLoad(_event) {
        //get context
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Picture.crc2 = canvas.getContext("2d");
        canvasTarget = document.querySelector("canvas");
        circle = document.querySelector("#circle");
        circlein = document.querySelector("#c");
        triangle = document.querySelector("#triangle");
        trianglein = document.querySelector("#t");
        square = document.querySelector("#square");
        squarein = document.querySelector("#s");
        v = document.querySelector("#velocity");
        r = document.querySelector("#rotation");
        c = document.querySelector("#color");
        s = document.querySelector("#figuresize");
        sizex = document.querySelector("#sizex");
        sizey = document.querySelector("#sizey");
        bg = document.querySelector("#backgroundc");
        save = document.querySelector("#save");
        restore = document.querySelector("#restore");
        //add Listeners
        circle?.addEventListener("click", selectCricle);
        triangle?.addEventListener("click", selectTriangle);
        square?.addEventListener("click", selectSquare);
        c?.addEventListener("change", changeColor);
        sizex?.addEventListener("change", adjustCanvas);
        sizey?.addEventListener("change", adjustCanvas);
        bg?.addEventListener("change", adjustCanvas);
        canvasTarget?.addEventListener("click", createFigure);
        save?.addEventListener("click", savePicture);
        restore?.addEventListener("click", restoerPicture);
    }
    function selectCricle() {
        let color = c?.value;
        figure = "circle";
        circle?.setAttribute("style", "background-color: lightblue");
        circlein?.setAttribute("style", "color: " + color);
        triangle?.setAttribute("style", "background-color: lightgray");
        trianglein?.setAttribute("style", "color: black");
        square?.setAttribute("style", "background-color: lightgray");
        squarein?.setAttribute("style", "color: black");
    }
    function selectTriangle() {
        let color = c?.value;
        figure = "triangle";
        circle?.setAttribute("style", "background-color: lightgray");
        circlein?.setAttribute("style", "color: black");
        triangle?.setAttribute("style", "background-color: lightblue");
        trianglein?.setAttribute("style", "color: " + color);
        square?.setAttribute("style", "background-color: lightgray");
        squarein?.setAttribute("style", "color: black");
    }
    function selectSquare() {
        let color = c?.value;
        figure = "square";
        circle?.setAttribute("style", "background-color: lightgray");
        circlein?.setAttribute("style", "color: black");
        triangle?.setAttribute("style", "background-color: lightgray");
        trianglein?.setAttribute("style", "color: black");
        square?.setAttribute("style", "background-color: lightblue");
        squarein?.setAttribute("style", "color: " + color);
    }
    function changeColor() {
        let color = c?.value;
        if (figure == "circle")
            circlein?.setAttribute("style", "color: " + color);
        else if (figure == "triangle")
            trianglein?.setAttribute("style", "color: " + color);
        else if (figure == "square")
            squarein?.setAttribute("style", "color: " + color);
        else
            console.log("no figure selectetd");
    }
    function adjustCanvas() {
        let x = sizex?.value;
        let y = sizey?.value;
        background = bg?.value;
        canvasTarget?.setAttribute("width", "" + x);
        canvasTarget?.setAttribute("height", "" + y);
    }
})(Picture || (Picture = {}));
//# sourceMappingURL=main.js.map