namespace L10_Virus_Inheritance {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable [] = [];
    let a: string = "red";
    let b: string = "white";
    //let d: string = "30px";
    //let e: string = "35px";

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        createVirus(20);
        createAntibodys(80);
        window.setInterval(update, 20);
        window.setInterval(toggleColor, 1000);

    }

    function createVirus (_nVirus: number): void {
        console.log("Create Virus");
        for (let i: number = 0; i < _nVirus; i++) {
            let virus: Virus = new Virus(1);
            moveables.push(virus);
        }
    }

    function createAntibodys (_nAntibody: number): void {
        console.log("Create Virus");
        for (let i: number = 0; i < _nAntibody; i++) {
            let position: Vector = new Vector(50, 100);
            let antibody: Antibody = new Antibody(1, position);
            moveables.push(antibody);
        }
    }

    function update(): void {
        
        drawBackground();

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        
        drawVisusLogo();
    }

    function drawBackground(): void {

        interface Background {
                r1: number;
                r2: number;
                x: number;
                y: number;
        }

        let background: Background[] = [
            {r1: 309, r2: 23, x: 187, y: 513},
            {r1: 136, r2: 27, x: 140, y: 413},
            {r1: 86, r2: 24, x: 4, y: 507},
            {r1: 181, r2: 4, x: 160, y: 546},
            {r1: 167, r2: 14, x: 271, y: 432},
            {r1: 61, r2: 11, x: 244, y: 350},
            {r1: 132, r2: 30, x: 98, y: 41},
            {r1: 170, r2: 11, x: 80, y: 285}
        ];
        
        crc2.resetTransform();
        //crc2.translate(0, 0);

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(60, 100%, 50%, 1)");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(1, "HSL(60, 100%, 50%, 1)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let index: number = 0; index < 8; index++) {
            interface Position {
                x: number;
                y: number;
            }
            let r1: number = background[index].r1;
            let r2: number = background[index].r2;
            let position: Position = {x: background[index].x, y: background[index].y};
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
        //drawVisusLogo();
    }

    function drawVisusLogo(): void {
        console.log("Virus Logo");

        crc2.resetTransform();
        crc2.translate(150, 275);

        crc2.beginPath();
        crc2.arc(0, 0, 55, 0, 2 * Math.PI);
        crc2.strokeStyle = a;
        crc2.lineWidth = 18;
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(50, 40, 60, 1.5, 2 * Math.PI);
        crc2.strokeStyle = a;
        crc2.lineWidth = 20;
        crc2.lineCap = "round";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(-50, 40, 60, 3.2, 2.5 * Math.PI);
        crc2.strokeStyle = a;
        crc2.lineWidth = 20;
        crc2.lineCap = "round";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(0, -50, 60, -0.75, 1.23 * Math.PI);
        crc2.strokeStyle = a;
        crc2.lineWidth = 20;
        crc2.lineCap = "round";
        crc2.stroke();
        crc2.closePath();
    }

    function toggleColor(): void {
        let c: string = "";
        //let f: string = "0";
    
        c = b;
        b = a;
        a = c;
        c = "";
        /*f = e;
        e = d;
        d = f;
        f = "0";*/
    
        setColor();
        playAlarm();
    }
    
    function setColor(): void {
        let font: HTMLElement = <HTMLElement> document.getElementById("virus");
        font.setAttribute("style", "background-color:" + b + "; color:" + a + ";");
    }

    function playAlarm(): void {
        let alarm: HTMLAudioElement = new Audio("alarm.mp3");
        alarm.play();
        console.log(alarm);
    }
}