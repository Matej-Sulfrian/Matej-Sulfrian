namespace L10_Virus_Inheritance {
    export class Virus extends Moveable {
        size: number;

        constructor (_size: number, _position?: Vector) {

            super(_position);

            console.log("Virus Construtor");
                
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 50);
            console.log(this.velocity);

            this.size = _size;
        }

        draw(): void {
            //console.log("Virus drawing");

            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 30);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "red");
    
            for (let i: number = 0; i < 9; i++) {
                crc2.beginPath();
                crc2.rotate(30);
                crc2.moveTo(0, 30);
                crc2.lineTo(0, 40);
                crc2.strokeStyle = "red";
                crc2.lineWidth = 3;
                crc2.scale(this.size, this.size);
                crc2.stroke();
                crc2.closePath();
                crc2.beginPath();
                crc2.arc(0, 40, 5, 0, 1 * Math.PI);
                crc2.fillStyle = gradient;
                crc2.scale(this.size, this.size);
                crc2.fill();
            }
            crc2.beginPath();
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.scale(this.size, this.size);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
}