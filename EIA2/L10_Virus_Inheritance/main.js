"use strict";
var L10_Virus_Inheritance;
(function (L10_Virus_Inheritance) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let a = "red";
    let b = "white";
    //let d: string = "30px";
    //let e: string = "35px";
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Virus_Inheritance.crc2 = canvas.getContext("2d");
        drawBackground();
        createVirus(20);
        createAntibodys(80);
        window.setInterval(update, 20);
        window.setInterval(toggleColor, 1000);
    }
    function createVirus(_nVirus) {
        console.log("Create Virus");
        for (let i = 0; i < _nVirus; i++) {
            let virus = new L10_Virus_Inheritance.Virus(1);
            moveables.push(virus);
        }
    }
    function createAntibodys(_nAntibody) {
        console.log("Create Virus");
        for (let i = 0; i < _nAntibody; i++) {
            let position = new L10_Virus_Inheritance.Vector(50, 100);
            let antibody = new L10_Virus_Inheritance.Antibody(1, position);
            moveables.push(antibody);
        }
    }
    function update() {
        drawBackground();
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        drawVisusLogo();
    }
    function drawBackground() {
        let background = [
            { r1: 309, r2: 23, x: 187, y: 513 },
            { r1: 136, r2: 27, x: 140, y: 413 },
            { r1: 86, r2: 24, x: 4, y: 507 },
            { r1: 181, r2: 4, x: 160, y: 546 },
            { r1: 167, r2: 14, x: 271, y: 432 },
            { r1: 61, r2: 11, x: 244, y: 350 },
            { r1: 132, r2: 30, x: 98, y: 41 },
            { r1: 170, r2: 11, x: 80, y: 285 }
        ];
        L10_Virus_Inheritance.crc2.resetTransform();
        //crc2.translate(0, 0);
        let gradient = L10_Virus_Inheritance.crc2.createLinearGradient(0, 0, 0, L10_Virus_Inheritance.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(60, 100%, 50%, 1)");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(1, "HSL(60, 100%, 50%, 1)");
        L10_Virus_Inheritance.crc2.fillStyle = gradient;
        L10_Virus_Inheritance.crc2.fillRect(0, 0, L10_Virus_Inheritance.crc2.canvas.width, L10_Virus_Inheritance.crc2.canvas.height);
        for (let index = 0; index < 8; index++) {
            let r1 = background[index].r1;
            let r2 = background[index].r2;
            let position = { x: background[index].x, y: background[index].y };
            let gradient = L10_Virus_Inheritance.crc2.createRadialGradient(0, 0, r2, 0, 0, r1);
            L10_Virus_Inheritance.crc2.save();
            gradient.addColorStop(0, "lightgreen");
            gradient.addColorStop(1, "HSL(60, 100%, 50%, 0)");
            L10_Virus_Inheritance.crc2.translate(position.x, position.y);
            L10_Virus_Inheritance.crc2.fillStyle = gradient;
            L10_Virus_Inheritance.crc2.arc(0, 0, r1, 0, 2 * Math.PI);
            L10_Virus_Inheritance.crc2.fill();
            L10_Virus_Inheritance.crc2.restore();
        }
        //drawVisusLogo();
    }
    function drawVisusLogo() {
        console.log("Virus Logo");
        L10_Virus_Inheritance.crc2.resetTransform();
        L10_Virus_Inheritance.crc2.translate(150, 275);
        L10_Virus_Inheritance.crc2.beginPath();
        L10_Virus_Inheritance.crc2.arc(0, 0, 55, 0, 2 * Math.PI);
        L10_Virus_Inheritance.crc2.strokeStyle = a;
        L10_Virus_Inheritance.crc2.lineWidth = 18;
        L10_Virus_Inheritance.crc2.stroke();
        L10_Virus_Inheritance.crc2.closePath();
        L10_Virus_Inheritance.crc2.beginPath();
        L10_Virus_Inheritance.crc2.arc(50, 40, 60, 1.5, 2 * Math.PI);
        L10_Virus_Inheritance.crc2.strokeStyle = a;
        L10_Virus_Inheritance.crc2.lineWidth = 20;
        L10_Virus_Inheritance.crc2.lineCap = "round";
        L10_Virus_Inheritance.crc2.stroke();
        L10_Virus_Inheritance.crc2.closePath();
        L10_Virus_Inheritance.crc2.beginPath();
        L10_Virus_Inheritance.crc2.arc(-50, 40, 60, 3.2, 2.5 * Math.PI);
        L10_Virus_Inheritance.crc2.strokeStyle = a;
        L10_Virus_Inheritance.crc2.lineWidth = 20;
        L10_Virus_Inheritance.crc2.lineCap = "round";
        L10_Virus_Inheritance.crc2.stroke();
        L10_Virus_Inheritance.crc2.closePath();
        L10_Virus_Inheritance.crc2.beginPath();
        L10_Virus_Inheritance.crc2.arc(0, -50, 60, -0.75, 1.23 * Math.PI);
        L10_Virus_Inheritance.crc2.strokeStyle = a;
        L10_Virus_Inheritance.crc2.lineWidth = 20;
        L10_Virus_Inheritance.crc2.lineCap = "round";
        L10_Virus_Inheritance.crc2.stroke();
        L10_Virus_Inheritance.crc2.closePath();
    }
    function toggleColor() {
        let c = "";
        //let f: string = "0";
        c = b;
        b = a;
        a = c;
        c = "";
        /*f = e;
        e = d;
        d = f;
        f = "0";*/
        setColor();
        playAlarm();
    }
    function setColor() {
        let font = document.getElementById("virus");
        font.setAttribute("style", "background-color:" + b + "; color:" + a + ";");
    }
    function playAlarm() {
        let alarm = new Audio("alarm.mp3");
        alarm.play();
        console.log(alarm);
    }
})(L10_Virus_Inheritance || (L10_Virus_Inheritance = {}));
//# sourceMappingURL=main.js.map