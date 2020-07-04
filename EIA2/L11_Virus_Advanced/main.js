"use strict";
var L11_Advanced;
(function (L11_Advanced) {
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
        L11_Advanced.crc2 = canvas.getContext("2d");
        drawBackground();
        createVirus(20);
        createAntibodys(80);
        window.setInterval(update, 20);
        window.setInterval(toggleColor, 1000);
    }
    function createVirus(_nVirus) {
        console.log("Create Virus");
        for (let i = 0; i < _nVirus; i++) {
            let virus = new L11_Advanced.Virus(1);
            moveables.push(virus);
        }
    }
    function createAntibodys(_nAntibody) {
        console.log("Create Virus");
        for (let i = 0; i < _nAntibody; i++) {
            let antibody = new L11_Advanced.Antibody(1);
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
        L11_Advanced.crc2.resetTransform();
        //crc2.translate(0, 0);
        let gradient = L11_Advanced.crc2.createLinearGradient(0, 0, 0, L11_Advanced.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(60, 100%, 50%, 1)");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(1, "HSL(60, 100%, 50%, 1)");
        L11_Advanced.crc2.fillStyle = gradient;
        L11_Advanced.crc2.fillRect(0, 0, L11_Advanced.crc2.canvas.width, L11_Advanced.crc2.canvas.height);
        for (let index = 0; index < 8; index++) {
            let r1 = background[index].r1;
            let r2 = background[index].r2;
            let position = { x: background[index].x, y: background[index].y };
            let gradient = L11_Advanced.crc2.createRadialGradient(0, 0, r2, 0, 0, r1);
            L11_Advanced.crc2.save();
            gradient.addColorStop(0, "lightgreen");
            gradient.addColorStop(1, "HSL(60, 100%, 50%, 0)");
            L11_Advanced.crc2.translate(position.x, position.y);
            L11_Advanced.crc2.fillStyle = gradient;
            L11_Advanced.crc2.arc(0, 0, r1, 0, 2 * Math.PI);
            L11_Advanced.crc2.fill();
            L11_Advanced.crc2.restore();
        }
        //drawVisusLogo();
    }
    function drawVisusLogo() {
        console.log("Virus Logo");
        L11_Advanced.crc2.resetTransform();
        L11_Advanced.crc2.translate(150, 275);
        L11_Advanced.crc2.beginPath();
        L11_Advanced.crc2.arc(0, 0, 55, 0, 2 * Math.PI);
        L11_Advanced.crc2.strokeStyle = a;
        L11_Advanced.crc2.lineWidth = 18;
        L11_Advanced.crc2.stroke();
        L11_Advanced.crc2.closePath();
        L11_Advanced.crc2.beginPath();
        L11_Advanced.crc2.arc(50, 40, 60, 1.5, 2 * Math.PI);
        L11_Advanced.crc2.strokeStyle = a;
        L11_Advanced.crc2.lineWidth = 20;
        L11_Advanced.crc2.lineCap = "round";
        L11_Advanced.crc2.stroke();
        L11_Advanced.crc2.closePath();
        L11_Advanced.crc2.beginPath();
        L11_Advanced.crc2.arc(-50, 40, 60, 3.2, 2.5 * Math.PI);
        L11_Advanced.crc2.strokeStyle = a;
        L11_Advanced.crc2.lineWidth = 20;
        L11_Advanced.crc2.lineCap = "round";
        L11_Advanced.crc2.stroke();
        L11_Advanced.crc2.closePath();
        L11_Advanced.crc2.beginPath();
        L11_Advanced.crc2.arc(0, -50, 60, -0.75, 1.23 * Math.PI);
        L11_Advanced.crc2.strokeStyle = a;
        L11_Advanced.crc2.lineWidth = 20;
        L11_Advanced.crc2.lineCap = "round";
        L11_Advanced.crc2.stroke();
        L11_Advanced.crc2.closePath();
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
})(L11_Advanced || (L11_Advanced = {}));
//# sourceMappingURL=main.js.map