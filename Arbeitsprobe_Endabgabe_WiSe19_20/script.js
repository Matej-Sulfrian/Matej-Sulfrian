/*Stapel aus dem gegeben wird*/
var deck = [
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
var spieler = [];
/*Gegener Hand*/
var gegner = [];
/*Gelegte Karte*/
var feld = [];
/*Ablage Stapel*/
var deckAbgelegt = [];
/*Boolean entscheidet wer dran ist*/
var zug = true;
/*Selektoren*/
var mittelFeld;
var spielerFeld;
var gegnerFeld;
var karte;
var restart;
var stapel;
var hinweis;
/*Selektieren nach dem der DOM geladen ist und Spiel starten*/
window.addEventListener("load", function () {
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
function setEventlistener() {
    restart.addEventListener("click", function () {
        console.log("newgame");
        window.location.reload();
    });
    /*Karte ziehen*/
    stapel.addEventListener("click", function () {
        spieler.push(deck[0]);
        deck.splice(0, 1);
        drawCardsToSpieler();
        hinweis.innerHTML = "";
        /*Gegner ist dran*/
        zug = false;
        /*Reaktionszeit für Gegener festlegen*/
        setTimeout(function () { gegnerZug(); }, 1000);
    });
}
/*Karten mischen*/
function mischen() {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}
/*Karten geben*/
function geben() {
    var k = 5;
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
    var neueKarte = document.createElement("div");
    neueKarte.classList.add("karte");
    neueKarte.classList.add("kartefeld");
    mittelFeld.appendChild(neueKarte);
    mittelFeld.querySelector(".kartefeld").innerHTML = "<p class='zahloben'>" + feld[0].zahl + "</p><p class='" + feld[0].farbe + "'></p><p class='zahlunten'>" + feld[0].zahl + "</p>";
}
/*Zug des Spilers*/
function spielerZug(index) {
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
            var neueKarte = document.createElement("div");
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
            var winsound = new Audio("matej.mp3");
            winsound.play();
            gegner.length++;
        }
    }
    /*Reaktionszeit für Gegener festlegen*/
    setTimeout(function () { gegnerZug(); }, 1000);
}
/*Zug des Gegners*/
function gegnerZug() {
    console.log("gegner");
    /*Wenn Gegener dran ist*/
    if (zug == false) {
        var f = 0;
        var d = 0;
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
                var neueKarte = document.createElement("div");
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
function drawCardsToSpieler() {
    spielerFeld.innerHTML = "";
    var _loop_1 = function (index_1) {
        var neueKarte = document.createElement("div");
        neueKarte.classList.add("karte");
        neueKarte.classList.add("karte" + index_1);
        spielerFeld.appendChild(neueKarte);
        spielerFeld.querySelector(".karte" + index_1).innerHTML = "<p class='zahloben'>" + spieler[index_1].zahl + "</p><p class='" + spieler[index_1].farbe + "'></p><p class='zahlunten'>" + spieler[index_1].zahl + "</p>";
        document.querySelector(".karte" + index_1).addEventListener("click", function () { spielerZug(index_1); });
    };
    for (var index_1 = 0; index_1 < spieler.length; index_1++) {
        _loop_1(index_1);
    }
}
/*Karten in das Gegnerfeld zeichnen*/
function drawCardsToGegner() {
    gegnerFeld.innerHTML = "";
    for (var index_2 = 0; index_2 < gegner.length; index_2++) {
        var neueKarte = document.createElement("div");
        neueKarte.classList.add("karteverdeckt");
        gegnerFeld.appendChild(neueKarte);
    }
}
//# sourceMappingURL=script.js.map