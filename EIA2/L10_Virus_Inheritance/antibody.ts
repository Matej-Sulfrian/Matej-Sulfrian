namespace L10_Virus_Inheritance {
    export class Antibody extends Moveable {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor (_size: number, _position?: Vector) {

            super(_position);

            console.log("Virus Construtor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(80, 180);
            console.log(this.velocity);

            this.size = _size;
        }

        draw(): void {
            //console.log("Virus drawing");

            crc2.resetTransform();
            crc2.translate(this.position.x, this.position.y);
            let antibody: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 10);

            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "lightgreen");

            antibody.arc(0, 0, 10, 0, 2 * Math.PI);

            crc2.fillStyle = gradient;
            crc2.fill(antibody);
        }
    }
}