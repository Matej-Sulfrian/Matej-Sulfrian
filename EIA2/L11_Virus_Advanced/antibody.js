"use strict";
var L11_Advanced;
(function (L11_Advanced) {
    class Antibody extends L11_Advanced.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Virus Construtor");
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Advanced.Vector(0, 0);
            this.velocity = new L11_Advanced.Vector(0, 0);
            this.velocity.random(80, 180);
            console.log(this.velocity);
            this.size = _size;
        }
        draw() {
            //console.log("Virus drawing");
            L11_Advanced.crc2.resetTransform();
            L11_Advanced.crc2.translate(this.position.x, this.position.y);
            let antibody = new Path2D();
            let gradient = L11_Advanced.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "lightgreen");
            antibody.arc(0, 0, 10, 0, 2 * Math.PI);
            L11_Advanced.crc2.fillStyle = gradient;
            L11_Advanced.crc2.fill(antibody);
        }
    }
    L11_Advanced.Antibody = Antibody;
})(L11_Advanced || (L11_Advanced = {}));
//# sourceMappingURL=antibody.js.map