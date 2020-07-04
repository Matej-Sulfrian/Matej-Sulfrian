"use strict";
var L11_Advanced;
(function (L11_Advanced) {
    class Moveable {
        constructor(_position) {
            this.expandable = false;
            this.hitRadius = 0;
            console.log("Moveable Construtor");
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Advanced.Vector(0, 0);
            this.velocity = new L11_Advanced.Vector(0, 0);
            this.velocity = new L11_Advanced.Vector(0, 0);
            //console.log(this.velocity);
        }
        move(_timeslice) {
            //console.log("Virus moving");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Advanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Advanced.crc2.canvas.height;
            if (this.position.x > L11_Advanced.crc2.canvas.width)
                this.position.x -= L11_Advanced.crc2.canvas.width;
            if (this.position.y > L11_Advanced.crc2.canvas.height)
                this.position.y -= L11_Advanced.crc2.canvas.height;
        }
    }
    L11_Advanced.Moveable = Moveable;
})(L11_Advanced || (L11_Advanced = {}));
//# sourceMappingURL=moaveable.js.map