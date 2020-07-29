"use strict";
var L10_Virus_Inheritance;
(function (L10_Virus_Inheritance) {
    class Virus extends L10_Virus_Inheritance.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Virus Construtor");
            this.velocity = new L10_Virus_Inheritance.Vector(0, 0);
            this.velocity.random(20, 50);
            console.log(this.velocity);
            this.size = _size;
        }
        draw() {
            //console.log("Virus drawing");
            L10_Virus_Inheritance.crc2.resetTransform();
            L10_Virus_Inheritance.crc2.save();
            L10_Virus_Inheritance.crc2.translate(this.position.x, this.position.y);
            let gradient = L10_Virus_Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, 30);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "red");
            for (let i = 0; i < 9; i++) {
                L10_Virus_Inheritance.crc2.beginPath();
                L10_Virus_Inheritance.crc2.rotate(30);
                L10_Virus_Inheritance.crc2.moveTo(0, 30);
                L10_Virus_Inheritance.crc2.lineTo(0, 40);
                L10_Virus_Inheritance.crc2.strokeStyle = "red";
                L10_Virus_Inheritance.crc2.lineWidth = 3;
                L10_Virus_Inheritance.crc2.scale(this.size, this.size);
                L10_Virus_Inheritance.crc2.stroke();
                L10_Virus_Inheritance.crc2.closePath();
                L10_Virus_Inheritance.crc2.beginPath();
                L10_Virus_Inheritance.crc2.arc(0, 40, 5, 0, 1 * Math.PI);
                L10_Virus_Inheritance.crc2.fillStyle = gradient;
                L10_Virus_Inheritance.crc2.scale(this.size, this.size);
                L10_Virus_Inheritance.crc2.fill();
            }
            L10_Virus_Inheritance.crc2.beginPath();
            L10_Virus_Inheritance.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            L10_Virus_Inheritance.crc2.fillStyle = gradient;
            L10_Virus_Inheritance.crc2.scale(this.size, this.size);
            L10_Virus_Inheritance.crc2.fill();
            L10_Virus_Inheritance.crc2.closePath();
            L10_Virus_Inheritance.crc2.restore();
        }
    }
    L10_Virus_Inheritance.Virus = Virus;
})(L10_Virus_Inheritance || (L10_Virus_Inheritance = {}));
//# sourceMappingURL=virus.js.map