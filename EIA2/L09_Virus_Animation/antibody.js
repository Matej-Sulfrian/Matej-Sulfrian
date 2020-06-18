"use strict";
var L09_Virus_Animation;
(function (L09_Virus_Animation) {
    class Antibody {
        constructor(_size, _position) {
            console.log("Virus Construtor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Virus_Animation.Vector(0, 0);
            this.velocity = new L09_Virus_Animation.Vector(0, 0);
            this.velocity.random(80, 180);
            console.log(this.velocity);
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("Virus moving");
            let offset = new L09_Virus_Animation.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Virus_Animation.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Virus_Animation.crc2.canvas.height;
            if (this.position.x > L09_Virus_Animation.crc2.canvas.width)
                this.position.x -= L09_Virus_Animation.crc2.canvas.width;
            if (this.position.y > L09_Virus_Animation.crc2.canvas.height)
                this.position.y -= L09_Virus_Animation.crc2.canvas.height;
        }
        draw() {
            //console.log("Virus drawing");
            L09_Virus_Animation.crc2.resetTransform();
            L09_Virus_Animation.crc2.translate(this.position.x, this.position.y);
            let antibody = new Path2D();
            let gradient = L09_Virus_Animation.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "lightgreen");
            antibody.arc(0, 0, 10, 0, 2 * Math.PI);
            L09_Virus_Animation.crc2.fillStyle = gradient;
            L09_Virus_Animation.crc2.fill(antibody);
        }
    }
    L09_Virus_Animation.Antibody = Antibody;
})(L09_Virus_Animation || (L09_Virus_Animation = {}));
//# sourceMappingURL=antibody.js.map