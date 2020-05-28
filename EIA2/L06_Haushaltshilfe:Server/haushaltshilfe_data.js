"use strict";
//Dieser Code basiert auf der Abgabe der Aufgabe 3 von Alid Kohler.
//Er wurde von mir eingeständig erweiter, nach meine Ermessen verbessert und als Grundlage für Aufgabe 4 verwendet.
var L06_Server;
(function (L06_Server) {
    //Hinzufügen eines load-Listeners 
    console.log("Hello");
    window.addEventListener("load", handleLoad);
    /**
     * Deklarieren von Variablen, für einfacheres Schreiben im Code und Deklaration
     * der globalen Variablen totalCost
     */
    let totalCost;
    let form;
    let confirm;
    let cash;
    let shopping;
    let house;
    let grocery;
    let money;
    let household;
    let cart;
    let getCash;
    let householdDone;
    let submit;
    let totalPrice;
    let response;
    let offer;
    let data;
    async function handleLoad() {
        response = await fetch("data.json");
        offer = await response.text();
        data = JSON.parse(offer);
        L06_Server.generateContent(data);
        totalCost = 0;
        form = document.querySelector("form");
        confirm = document.getElementById("choice");
        cash = document.getElementById("cash");
        shopping = document.getElementById("shopping");
        house = document.getElementById("house");
        grocery = document.getElementById("grocery");
        money = document.getElementById("money");
        household = document.getElementById("household");
        cart = document.getElementById("cart");
        getCash = document.getElementById("getCash");
        householdDone = document.getElementById("householdDone");
        submit = document.getElementById("submit");
        totalPrice = document.getElementById("totalPrice");
        response = await fetch("data.json");
        offer = await response.text();
        offer = JSON.parse(offer);
        // Event-Listener auf alle Buttons, nachdem alles geladen wurde
        cart.addEventListener("click", handleChange);
        getCash.addEventListener("click", handleChange);
        householdDone.addEventListener("click", handleChange);
        confirm.addEventListener("change", showInput);
        submit.addEventListener("click", sendOrder);
    }
    function showInput() {
        /**
         * Aktivieren des Fieldsets, für das sich der Nutzer entschieden hat und
         * deaktivieren der anderen, damit versehentliche Eingaben vermieden werden.
         */
        if (cash.checked == true) {
            grocery.disabled = true;
            money.disabled = false;
            household.disabled = true;
        }
        else if (shopping.checked == true) {
            grocery.disabled = false;
            money.disabled = true;
            household.disabled = true;
        }
        else if (house.checked == true) {
            grocery.disabled = true;
            money.disabled = true;
            household.disabled = false;
        }
    }
    function handleChange(_event) {
        //Selektieren der drei Tabellen aus dem HTML, für jede Erledigung gibt es eine Tabelle
        let table = document.getElementById("table");
        let table2 = document.getElementById("table2");
        let table3 = document.getElementById("table3");
        // Erstellen der Form-Data Variable
        let formData = new FormData(document.forms[0]);
        // Iterieren über alle Einträge in formData
        for (let entry of formData) {
            // Erstellen einer Variable mit dem Wert des Eintrags
            console.log(entry);
            let selector = "[value='" + entry[1] + "']";
            // Selektieren des HTML-Elements mit dem entsprechenden Wert
            let item = document.querySelector(selector);
            console.log(item);
            //Neue Tabellenzeile und insgesamt sechs Spalten erstellen
            let row = document.createElement("tr");
            let td = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            // Erstellen eines Buttons, damit man den Eintrag später auch löschen kann 
            let deleteButton = document.createElement("button");
            // Hinzufügen eines Mülleimer-Symbols
            deleteButton.classList.add("far", "fa-trash-alt");
            // Switch-Case mit den Namen der Einträge
            switch (entry[0]) {
                case "Menge":
                    break;
                case "Artikel":
                    // Suchen nach dem Preis-Attribut 
                    let itemPrice = Number(item.getAttribute("price"));
                    // Wert aus dem Slider abgreufen 
                    let menge = Number(formData.get("Menge"));
                    // Wert, um welche Einheit es sich bei dem Artikel handelt suchen 
                    let einheit = String(item.getAttribute("unit"));
                    // Eintrag aus dem Supermarkt-Inputfeld suchen 
                    let markt = String(formData.get("Bevorzugter Supermarkt"));
                    // Den Preis aus Menge und dem jeweiligen Grundpreis des Artikels berechen
                    itemPrice = menge * itemPrice;
                    // Deklarieren einer Variablen, um den Gesamtpreis (inklusive Service-Gebühr) an 
                    // die Funktion deleteListener zu übergeben 
                    let gesamt = itemPrice + 0.5;
                    // Installieren des Event-Listeners auf dem Button und übergeben des Gesamtpreises
                    deleteButton.addEventListener("click", function () {
                        deleteList(gesamt, event);
                    });
                    // Eintragen der Werte in die Tabelle
                    td.innerHTML = "" + entry[1];
                    td2.innerHTML = "" + itemPrice.toFixed(2) + "€";
                    td3.innerHTML = "" + menge;
                    td4.innerHTML = "" + einheit;
                    td5.innerHTML = "" + 0.50 + "€";
                    td6.innerHTML = "" + markt;
                    // Die neuen Elemente in das HTML integrieren
                    td7.appendChild(deleteButton);
                    row.appendChild(td);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    row.appendChild(td4);
                    row.appendChild(td5);
                    row.appendChild(td6);
                    row.appendChild(td7);
                    table.appendChild(row);
                    // Hinzufügen des Preises zum Gesamtpreis
                    totalCost += itemPrice + 0.50;
                    // Das Form-Element wird geleert, damit der Nutzer die Eingaben nicht selbst löschen muss 
                    break;
                case "cash":
                    // Suchen nach dem Preis-Attribut 
                    // Der Wert wird rausgesucht und zum String gemacht, um ihn in der if-else Anweisung vergleichen zu können
                    let money = String(item.getAttribute("value"));
                    // Wenn der Wert Geld abheben ist, muss der Wert aus dem slider mit den Grundkosten verrechnet werden 
                    if (money == "Geld abheben") {
                        // Der Wert vom Slider wird abgegriffen
                        let bargeld = Number(formData.get("bargeld"));
                        // Die Grundgebühr wird hinzugfeügt
                        let geld = bargeld + 5;
                        // Die Werte in die Tabellenspalten eintragen
                        td.innerHTML = "" + money;
                        td2.innerHTML = "" + geld + "€";
                        // Den Event-Listener zum Button hinzufügen und den Gesamtpreis übergeben
                        deleteButton.addEventListener("click", function () {
                            deleteList(geld, event);
                        });
                        // Alle neuen Elemente ins HTML integrieren
                        td3.appendChild(deleteButton);
                        row.appendChild(td);
                        row.appendChild(td2);
                        row.appendChild(td3);
                        table2.appendChild(row);
                        // Die Kosten zu den Gesamtkosten hinzufügen und dann das Form-Element leeren
                        totalCost += geld;
                        break;
                    }
                    else if (money == "Geld einzahlen") {
                        // Im Fall von Geld abheben wird ein Betrag von 5 Euro berechnet
                        // Wie oben wird der Event-Listener installiert, der Preis zum den Gesamtkosten hinzugefügt und das Form-Element geleert
                        td.innerHTML = "" + money;
                        td2.innerHTML = "" + 5 + "€";
                        // Wie oben wird der Event-Listener installiert, alle neuen Elemente ins HTML integriert
                        // der Preis zum den Gesamtkosten hinzugefügt und das Form-Element geleert
                        deleteButton.addEventListener("click", function () {
                            deleteList(5, event);
                        });
                        td3.appendChild(deleteButton);
                        row.appendChild(td);
                        row.appendChild(td2);
                        row.appendChild(td3);
                        table2.appendChild(row);
                        totalCost += 5;
                        form.reset();
                        break;
                    }
                    break;
                case "toDo":
                    // Suchen nach dem Preis-Attribut 
                    let itemCost = Number(item.getAttribute("price"));
                    // Nach dem selben Prinzip wie oben werden jetzt auch die Haushaltsarbeiten durchgearbeitet
                    td.innerHTML = "" + entry[1];
                    td2.innerHTML = "" + itemCost + "€";
                    deleteButton.addEventListener("click", function () {
                        deleteList(itemCost, event);
                    });
                    td3.appendChild(deleteButton);
                    row.appendChild(td);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    table3.appendChild(row);
                    totalCost += itemCost;
                    form.reset();
                    break;
            }
            // Der Gesamtpreis wird in der Bestellübersicht angezeigt, nachdem der alte Preis-Eintrag gelöscht wurde
            totalPrice.innerHTML = "";
            totalPrice.innerHTML = "<strong>Gesamtpreis: </strong>" + totalCost.toFixed(2) + "€";
        }
    }
    function deleteList(price, _event) {
        // Der Preis wird vom Gesamtpreis abgezogen und die Anzeige aktualiiert
        totalCost -= price;
        totalPrice.innerHTML = "" + totalCost.toFixed(2);
        // Das Eltern-Element des Eltern-Elements des Buttons soll gelöscht werden.
        // Die enstprechenden Elemente werden selektiert und gelöscht
        let target = _event.target;
        let parent = target.parentNode;
        let grandParent = parent.parentNode;
        let greatGrandParent = grandParent.parentNode;
        parent.removeChild(target);
        grandParent.removeChild(parent);
        greatGrandParent.removeChild(grandParent);
    }
    async function sendOrder(_event) {
        // Wenn der Button zum Abschicken gedrückt wurde, wird in einem Alert-Fenster eine Benachrichtigung mit dem Lieferdatum angezeigt
        let date = document.getElementById("date");
        let lieferdatum = date.value;
        let paypal = document.getElementById("paypal");
        let überweisung = document.getElementById("überweisung");
        let zahlungsart;
        if (paypal.checked == true) {
            zahlungsart = "Paypal";
        }
        else if (überweisung.checked == true) {
            zahlungsart = "Überweisung";
        }
        else {
            zahlungsart = "Bar";
        }
        alert("Ihre Bestellung wird am " + lieferdatum + "  bei Ihnen sein!" + "\n Ihre Zahlungsart: " + zahlungsart + "\n Ihre gesamte Bestellung kostet " + totalCost + "€");
        //Dataen an Server schicken
        console.log("Send Order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("haushaltshilfe_data.htm?" + query.toString());
        alert("Ihre Bestellung wurde entgegen genommen. Vielen Dank!");
    }
})(L06_Server || (L06_Server = {}));
//# sourceMappingURL=haushaltshilfe_data.js.map