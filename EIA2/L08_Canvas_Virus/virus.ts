namespace L08_Canvas_Virus {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawVirus({x: 225 + Math.floor(Math.random() * 16), y: 75 + Math.floor(Math.random() * 26)});
        drawVirus({x: 75 + Math.floor(Math.random() * 16), y: 125 + Math.floor(Math.random() * 26)});
        drawVirus({x: 175 + Math.floor(Math.random() * 16), y: 450 + Math.floor(Math.random() * 26)});
        drawVisusLogo();
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(60, 100%, 50%, 0)");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(1, "HSL(60, 100%, 50%, 0)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let index: number = 0; index < 10; index++) {
            console.log("drawing");
            let r1: number = Math.floor(Math.random() * 301) + 30;
            let r2: number = Math.floor(Math.random() * 31);
            let position: Vector = {x: Math.floor(Math.random() * 301) + index, y: Math.floor(Math.random() * 551) + index};
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r2, 0, 0, r1);

            crc2.save();

            gradient.addColorStop(0, "lightgreen");
            gradient.addColorStop(1, "HSL(60, 100%, 50%, 0)");

            crc2.translate(position.x, position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r1, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }

    function drawVirus(_position: Vector): void {
        console.log("Virus", _position);

        /*let virus: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 30);

        virus.arc(0, 0, 30, 0, 2 * Math.PI);

        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "red");


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.fill(virus);*/

        crc2.restore();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 30);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "red");

        for (let i = 0; i < 9; i++) {
            crc2.beginPath();
            crc2.rotate(30);
            crc2.moveTo(0, 30);
            crc2.lineTo(0, 40);
            crc2.strokeStyle = "red";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(0, 40, 5, 0, 1 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();
        }
        crc2.beginPath();
        crc2.arc(0, 0, 30, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }

    function drawVisusLogo(): void {
        console.log("Virus Logo");

        crc2.translate(150, 275);

        crc2.beginPath();
        crc2.arc(0, 0, 45, 0, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 13;
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.beginPath();
        crc2.arc(50, 40, 50, 1.5, 2 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 15;
        crc2.lineCap = "round";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.beginPath();
        crc2.arc(-50, 40, 50, 3.2, 2.5 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 15;
        crc2.lineCap = "round";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();

        crc2.beginPath();
        crc2.arc(0, -50, 50, -0.75, 1.23 * Math.PI);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 15;
        crc2.lineCap = "round";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
        
    }
}