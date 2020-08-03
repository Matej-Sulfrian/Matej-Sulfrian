namespace Picture {
    export class Figure {
        position: Vector;
        velocity: Vector;
        rotation: number;
        factor: number;
        type: string;
        color: string;
        size: number;

        constructor (_type: string, _position: Vector, _velocity: Vector, _rotation: number, _color: string, _size: number) {
            this.position = _position;
            this.rotation = _rotation;
            this.type = _type;
            this.color = _color;
            this.size = _size;
            this.velocity = new Vector (0, 0);
            this.factor = this.rotation;
            this.velocity = _velocity;

            if (this.velocity.x == 1)
                this.velocity.random(1, 1);
                else if (this.velocity.x == 2)
                    this.velocity.random(2, 2);
                    else if (this.velocity.x)
                        this.velocity.random(3, 3);
                        else
                            console.log("no velocity");
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
            
            console.log(this.position);
            console.log(this.velocity);
        }
        
        rotate(): void {
            if (this.rotation != 0) {
                //crc2.resetTransform();
                crc2.translate(this.position.x, this.position.y);
                //console.log(this.position);
                if (this.factor / 100 == 2 + Number ((this.rotation / 100).toFixed(2)))
                    this.factor = this.rotation;
                //crc2.rotate(Math.PI * this.factor);
                if (this.rotation == 1) {
                    this.factor += 1;
                    }
                    else if (this.rotation == 2) {
                        this.factor += 2;
                        }
                        else if (this.rotation == 4) {
                            this.factor += 4;
                            }
                crc2.rotate(Math.PI * this.factor / 100);
                
            }
        }

        draw(): void {
            console.log("drawing circle");
        }

    }
}