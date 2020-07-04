"use strict";
var L11_Advanced;
(function (L11_Advanced) {
    class Virus extends L11_Advanced.Moveable {
        constructor(_size, _position) {
            super(_position);
            //console.log("Virus Construtor");
            this.velocity = L11_Advanced.Vector.getRandom(20, 50);
            //console.log(this.velocity);
            this.size = _size;
            this.hitRadius = 35;
        }
        draw() {
            //console.log("Virus drawing");
            L11_Advanced.crc2.resetTransform();
            L11_Advanced.crc2.save();
            L11_Advanced.crc2.translate(this.position.x, this.position.y);
            let gradient = L11_Advanced.crc2.createRadialGradient(0, 0, 0, 0, 0, 30);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "red");
            for (let i = 0; i < 9; i++) {
                L11_Advanced.crc2.beginPath();
                L11_Advanced.crc2.rotate(30);
                L11_Advanced.crc2.moveTo(0, 30);
                L11_Advanced.crc2.lineTo(0, 40);
                L11_Advanced.crc2.strokeStyle = "red";
                L11_Advanced.crc2.lineWidth = 3;
                L11_Advanced.crc2.scale(this.size, this.size);
                L11_Advanced.crc2.stroke();
                L11_Advanced.crc2.closePath();
                L11_Advanced.crc2.beginPath();
                L11_Advanced.crc2.arc(0, 40, 5, 0, 1 * Math.PI);
                L11_Advanced.crc2.fillStyle = gradient;
                L11_Advanced.crc2.scale(this.size, this.size);
                L11_Advanced.crc2.fill();
            }
            L11_Advanced.crc2.beginPath();
            L11_Advanced.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            L11_Advanced.crc2.fillStyle = gradient;
            L11_Advanced.crc2.scale(this.size, this.size);
            L11_Advanced.crc2.fill();
            L11_Advanced.crc2.closePath();
            L11_Advanced.crc2.restore();
        }
    }
    L11_Advanced.Virus = Virus;
})(L11_Advanced || (L11_Advanced = {}));
//# sourceMappingURL=virus.js.map