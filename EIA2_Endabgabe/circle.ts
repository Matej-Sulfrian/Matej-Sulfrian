namespace Picture {
    export class Circle extends Figure {

        constructor(_type: string, _position: Vector, _velocity: Vector, _rotation: number, _color: string, _size: number) {
            super (_type, _position, _velocity, _rotation, _color, _size);
        }

        draw(): void {
            if (this.rotation == 0)
                crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 30 * this.size, -1.35, 1.4 * Math.PI);
            crc2.scale(this.size * 2, this.size * 2);
            crc2.lineCap = "round";
            crc2.strokeStyle = this.color;
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.closePath();
            crc2.resetTransform();
        }
    }
}