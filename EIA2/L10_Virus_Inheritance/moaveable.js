"use strict";
var L10_Virus_Inheritance;
(function (L10_Virus_Inheritance) {
    class Moveable {
        constructor(_position) {
            console.log("Moveable Construtor");
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Virus_Inheritance.Vector(0, 0);
            this.velocity = new L10_Virus_Inheritance.Vector(0, 0);
            this.velocity = new L10_Virus_Inheritance.Vector(0, 0);
            //console.log(this.velocity);
        }
        move(_timeslice) {
            //console.log("Virus moving");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Virus_Inheritance.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Virus_Inheritance.crc2.canvas.height;
            if (this.position.x > L10_Virus_Inheritance.crc2.canvas.width)
                this.position.x -= L10_Virus_Inheritance.crc2.canvas.width;
            if (this.position.y > L10_Virus_Inheritance.crc2.canvas.height)
                this.position.y -= L10_Virus_Inheritance.crc2.canvas.height;
        }
        draw() {
            //console.log("drawing");
        }
    }
    L10_Virus_Inheritance.Moveable = Moveable;
})(L10_Virus_Inheritance || (L10_Virus_Inheritance = {}));
//# sourceMappingURL=moaveable.js.map