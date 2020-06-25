"use strict";
var L10_Virus_Inheritance;
(function (L10_Virus_Inheritance) {
    class Antibody extends L10_Virus_Inheritance.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Virus Construtor");
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Virus_Inheritance.Vector(0, 0);
            this.velocity = new L10_Virus_Inheritance.Vector(0, 0);
            this.velocity.random(80, 180);
            console.log(this.velocity);
            this.size = _size;
        }
        draw() {
            //console.log("Virus drawing");
            L10_Virus_Inheritance.crc2.resetTransform();
            L10_Virus_Inheritance.crc2.translate(this.position.x, this.position.y);
            let antibody = new Path2D();
            let gradient = L10_Virus_Inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "lightgreen");
            antibody.arc(0, 0, 10, 0, 2 * Math.PI);
            L10_Virus_Inheritance.crc2.fillStyle = gradient;
            L10_Virus_Inheritance.crc2.fill(antibody);
        }
    }
    L10_Virus_Inheritance.Antibody = Antibody;
})(L10_Virus_Inheritance || (L10_Virus_Inheritance = {}));
//# sourceMappingURL=antibody.js.map