interface Karten {
    zahl: number;
    farbe: string;
}

/*Stapel aus dem gegeben wird*/
var deck: Karten[] = [
    /*Chrome*/
    {
        zahl: 1,
        farbe: "fab fa-chrome"
    },
    {
        zahl: 2,
        farbe: "fab fa-chrome"
    },
    {
        zahl: 3,
        farbe: "fab fa-chrome"
    },
    {
        zahl: 4,
        farbe: "fab fa-chrome"
    },
    {
        zahl: 5,
        farbe: "fab fa-chrome"
    },
    {
        zahl: 6,
        farbe: "fab fa-chrome"
    },
    {
        zahl: 7,
        farbe: "fab fa-chrome"
    },
    {
        zahl: 8,
        farbe: "fab fa-chrome"
    },
    /*Herz*/
    {
        zahl: 1,
        farbe: "fab fa-firefox"
    },
    {
        zahl: 2,
        farbe: "fab fa-firefox"
    },
    {
        zahl: 3,
        farbe: "fab fa-firefox"
    },
    {
        zahl: 4,
        farbe: "fab fa-firefox"
    },
    {
        zahl: 5,
        farbe: "fab fa-firefox"
    },
    {
        zahl: 6,
        farbe: "fab fa-firefox"
    },
    {
        zahl: 7,
        farbe: "fab fa-firefox"
    },
    {
        zahl: 8,
        farbe: "fab fa-firefox"
    },
    /*Kreuz*/
    {
        zahl: 1,
        farbe: "fab fa-safari"
    },
    {
        zahl: 2,
        farbe: "fab fa-safari"
    },
    {
        zahl: 3,
        farbe: "fab fa-safari"
    },
    {
        zahl: 4,
        farbe: "fab fa-safari"
    },
    {
        zahl: 5,
        farbe: "fab fa-safari"
    },
    {
        zahl: 6,
        farbe: "fab fa-safari"
    },
    {
        zahl: 7,
        farbe: "fab fa-safari"
    },
    {
        zahl: 8,
        farbe: "fab fa-safari"
    },
    /*Pik*/
    {
        zahl: 1,
        farbe: "fab fa-internet-explorer"
    },
    {
        zahl: 2,
        farbe: "fab fa-internet-explorer"
    },
    {
        zahl: 3,
        farbe: "fab fa-internet-explorer"
    },
    {
        zahl: 4,
        farbe: "fab fa-internet-explorer"
    },
    {
        zahl: 5,
        farbe: "fab fa-internet-explorer"
    },
    {
        zahl: 6,
        farbe: "fab fa-internet-explorer"
    },
    {
        zahl: 7,
        farbe: "fab fa-internet-explorer"
    },
    {
        zahl: 8,
        farbe: "fab fa-internet-explorer"
    }
];
/*Spiler Hand*/
var spieler: Karten[] = [];
/*Gegener Hand*/
var gegner: Karten[] = [];
/*Gelegte Karte*/
var feld: Karten[] = [];
/*Ablage Stapel*/
var deckAbgelegt: Karten[] = [];
/*Boolean entscheidet wer dran ist*/
var zug: boolean = true;

/*Selektoren*/
var mittelFeld: HTMLElement;
var spielerFeld: HTMLElement;
var gegnerFeld: HTMLElement;
var karte: HTMLElement;
var restart: HTMLElement;
var stapel: HTMLElement;
var hinweis: HTMLElement;

/*Selektieren nach dem der DOM geladen ist und Spiel starten*/
window.addEventListener("load", function (): void {
    gegnerFeld = document.querySelector(".gegner");
    spielerFeld = document.querySelector(".spieler");
    mittelFeld = document.querySelector(".feld1");
    karte = document.querySelector(".karte");
    restart = document.querySelector(".newgame");
    stapel = document.querySelector(".ziehen");
    hinweis = document.querySelector(".hinweis");
    mischen();
    geben();
    drawCardsToSpieler();
    drawCardsToGegner();
    setEventlistener();
});

/*Neues Spiel starten, indem die Siete neu geladen wird*/
function setEventlistener(): void {
    
    restart.addEventListener("click", function(): void {
        console.log("newgame"); window.location.reload();
    });
    
    /*Karte ziehen*/
    stapel.addEventListener("click", function (): void {
        spieler.push(deck[0]);
        deck.splice(0, 1);
        drawCardsToSpieler();
        hinweis.innerHTML = "";
        /*Gegner ist dran*/
        zug = false;
        /*Reaktionszeit für Gegener festlegen*/
        setTimeout( function (): void {gegnerZug(); }, 1000);
    });
}

/*Karten mischen*/
function mischen(): void {
    for (var i: number = deck.length - 1; i > 0; i--) {
        var j: number = Math.floor(Math.random() * (i + 1));
        var temp: Karten = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

/*Karten geben*/
function geben(): void {
    let k: number = 5;
    while (k !== 0) {
        spieler.push(deck[0]);
        deck.splice(0, 1);
        gegner.push(deck[0]);
        deck.splice(0, 1);
        k--;
    }

    /*Start Karte hinzufüngen*/
    feld.push(deck[0]);
    deck.splice(0, 1);

    mittelFeld.innerHTML = "";

    let neueKarte: HTMLElement = document.createElement("div");
    neueKarte.classList.add("karte");
    neueKarte.classList.add("kartefeld");
    mittelFeld.appendChild(neueKarte);
    mittelFeld.querySelector(".kartefeld").innerHTML = "<p class='zahloben'>" + feld[0].zahl + "</p><p class='" + feld[0].farbe + "'></p><p class='zahlunten'>" + feld[0].zahl + "</p>";
}


/*Zug des Spilers*/
function spielerZug(index: number): void {
    
    console.log(index);
    
    /*Wenn Spieler dran ist*/
    if (zug == true) {
        console.log(spieler[index]);

        /*Wenn die Farbe oder die Zahl mit der aktuell gelegte Karte übereinstimmt*/
        if (feld[0].farbe == spieler[index].farbe || feld[0].zahl == spieler[index].zahl) {

            /*aktuelle Karte aus Feld entfernen*/
            deckAbgelegt.push(feld[0]);
            feld.splice(0, 1);

            /*Karte legen*/
            feld.push(spieler[index]);
            spieler.splice(index, 1);

            /*Karte wird ins Feld gezeichnet*/
            mittelFeld.innerHTML = "";

            let neueKarte: HTMLElement = document.createElement("div");
            neueKarte.classList.add("karte");
            neueKarte.classList.add("kartefeld");
            mittelFeld.appendChild(neueKarte);
            mittelFeld.querySelector(".kartefeld").innerHTML = "<p class='zahloben'>" + feld[0].zahl + "</p><p class='" + feld[0].farbe + "'></p><p class='zahlunten'>" + feld[0].zahl + "</p>";

            /*Gegebenen Falls Hiweis auf ziehen entfernen*/
            hinweis.innerHTML = "";

            /*Gegner ist dran*/
            zug = false;
            drawCardsToSpieler();
        }

        /*sonst wird neue Karte gezogen*/
        else {
            hinweis.innerHTML = "Ziehen";
        }

        /*Wenn der Deckstapel leer ist, werden die karten neu gemisch*/
        if (deck.length == 0) {
            deck = deckAbgelegt;
            deckAbgelegt = [];
            mischen();
            console.log("karten wurde gemischt");
        }

        /*Gewinner Meldung*/
        if (spieler.length == 0) {
            drawCardsToSpieler();
            document.querySelector(".winlose").setAttribute("style", "background-image: url(winn.gif);");
            document.querySelector(".homer").setAttribute("style", "background-image: url(winner.gif);");
            document.querySelector(".homer1").setAttribute("style", "background-image: url(winner.gif);");
            document.querySelector(".schrift").setAttribute("style", "background-image: url(schrift.gif);");
            restart.innerHTML = "New Game";
            var winsound: HTMLAudioElement = new Audio("matej.mp3");
            winsound.play();
            gegner.length++;

        }
    }

    /*Reaktionszeit für Gegener festlegen*/
    setTimeout( function (): void {gegnerZug(); }, 1000);
}


/*Zug des Gegners*/
function gegnerZug(): void {
    
    console.log("gegner");

    /*Wenn Gegener dran ist*/
    if (zug == false) {

        var f: number = 0;
        var d: number = 0;

        while (f < gegner.length) {

            /*Wenn die Farbe oder die Zahl mit der aktuell gelegte Karte übereinstimmt*/
            if (feld[0].farbe == gegner[f].farbe || feld[0].zahl == gegner[f].zahl) {

                /*aktuelle Karte aus Feld entfernen*/
                deckAbgelegt.push(feld[0]);
                feld.splice(0, 1);

                /*Karte legen*/
                feld.push(gegner[f]);
                gegner.splice(f, 1);

                /*Karte wird ins Feld gezeichnet*/
                mittelFeld.innerHTML = "";

                let neueKarte: HTMLElement = document.createElement("div");
                neueKarte.classList.add("karte");
                neueKarte.classList.add("kartefeld");
                mittelFeld.appendChild(neueKarte);
                mittelFeld.querySelector(".kartefeld").innerHTML = "<p class='zahloben'>" + feld[0].zahl + "</p><p class='" + feld[0].farbe + "'></p><p class='zahlunten'>" + feld[0].zahl + "</p>";
                f = gegner.length;
                d++;

                /*Verlierer Meldung*/
                if (gegner.length == 0) {
                    drawCardsToGegner();
                    document.querySelector(".homer2").setAttribute("style", "background-image: url(lost.gif);");
                    document.querySelector(".homer3").setAttribute("style", "background-image: url(lost.gif);");
                    document.querySelector(".schrift").setAttribute("style", "background-image: url(schrift1.gif);");
                    restart.innerHTML = "New Game";
                }
            }
            else {
                f++;
            }
        }

        /*Wenn der Gegner nicht spielen kann, zieht er ein Karte*/
        if (d == 0) {
            gegner.push(deck[0]);
            deck.splice(0, 1);
        }

        /*Wenn der Deckstapel leer ist, werden die karten neu gemisch*/
        if (deck.length == 0) {
            deck = deckAbgelegt;
            deckAbgelegt = [];
            mischen();
        }

        /*Spiler ist wieder dran*/
        else {
            zug = true;
            drawCardsToGegner();
        }
    }
}

/*Karten in das Spielerfeld zeichnen*/
function drawCardsToSpieler(): void {
    spielerFeld.innerHTML = "";

    for (let index: number = 0; index < spieler.length; index++) {

        let neueKarte: HTMLElement = document.createElement("div");
        neueKarte.classList.add("karte");
        neueKarte.classList.add("karte" + index);
        spielerFeld.appendChild(neueKarte);
        spielerFeld.querySelector(".karte" + index).innerHTML = "<p class='zahloben'>" + spieler[index].zahl + "</p><p class='" + spieler[index].farbe + "'></p><p class='zahlunten'>" + spieler[index].zahl + "</p>";
        document.querySelector(".karte" + index).addEventListener("click", function (): void { spielerZug(index); });
    }
}

/*Karten in das Gegnerfeld zeichnen*/
function drawCardsToGegner(): void {
    gegnerFeld.innerHTML = "";

    for (let index: number = 0; index < gegner.length; index++) {

        let neueKarte: HTMLElement = document.createElement("div");
        neueKarte.classList.add("karteverdeckt");
        gegnerFeld.appendChild(neueKarte);
    }
}