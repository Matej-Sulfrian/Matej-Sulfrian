//Dieser Code basiert auf der Abgabe der Aufgabe 3 von Alid Kohler.
//Er wurde von mir eingeständig erweiter, nach meine Ermessen verbessert und als Grundlage für Aufgabe 4 verwendet.

namespace L05_Clien {
    //Hinzufügen eines load-Listeners 
    console.log("Hello");
    window.addEventListener("load", handleLoad);
    /**
     * Deklarieren von Variablen, für einfacheres Schreiben im Code und Deklaration 
     * der globalen Variablen totalCost 
     */
    let totalCost: number;
    let form: HTMLFormElement;
    let confirm: HTMLElement;
    let cash: HTMLInputElement;
    let shopping: HTMLInputElement;
    let house: HTMLInputElement;

    let grocery: HTMLFieldSetElement;
    let money: HTMLFieldSetElement;
    let household: HTMLFieldSetElement;
    let cart: HTMLButtonElement;
    let getCash: HTMLButtonElement;
    let householdDone: HTMLButtonElement;
    let submit: HTMLButtonElement;
    let totalPrice: HTMLLabelElement;
    let response: Response;
    let offer: string;
    let data: Data;

    async function handleLoad(): Promise<void> {

        response = await fetch("data.json");
        offer = await response.text();
        data = JSON.parse(offer);
        generateContent(data);

        totalCost = 0;
        form = <HTMLFormElement>document.querySelector("form");
        confirm = <HTMLElement>document.getElementById("choice");
        cash = <HTMLInputElement>document.getElementById("cash");
        shopping = <HTMLInputElement>document.getElementById("shopping");
        house = <HTMLInputElement>document.getElementById("house");
    
        grocery = <HTMLFieldSetElement>document.getElementById("grocery");
        money = <HTMLFieldSetElement>document.getElementById("money");
        household = <HTMLFieldSetElement>document.getElementById("household");
        cart = <HTMLButtonElement>document.getElementById("cart");
        getCash = <HTMLButtonElement>document.getElementById("getCash");
        householdDone = <HTMLButtonElement>document.getElementById("householdDone");
        submit = <HTMLButtonElement>document.getElementById("submit");
        totalPrice = <HTMLLabelElement>document.getElementById("totalPrice");
        response = await fetch("Data.json");
        offer = await response.text();
        offer = JSON.parse(offer);

        // Event-Listener auf alle Buttons, nachdem alles geladen wurde
        cart.addEventListener("click", handleChange);
        getCash.addEventListener("click", handleChange);
        householdDone.addEventListener("click", handleChange);
        confirm.addEventListener("change", showInput);
        submit.addEventListener("click", sendOrder);
    }

    function showInput(): void {
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

    function handleChange(_event: Event): void {
        //Selektieren der drei Tabellen aus dem HTML, für jede Erledigung gibt es eine Tabelle
        let table: HTMLDivElement = <HTMLDivElement>document.getElementById("table");
        let table2: HTMLDivElement = <HTMLDivElement>document.getElementById("table2");
        let table3: HTMLDivElement = <HTMLDivElement>document.getElementById("table3");
        // Erstellen der Form-Data Variable
        let formData: FormData = new FormData(document.forms[0]);
        // Iterieren über alle Einträge in formData
        for (let entry of formData) {
            // Erstellen einer Variable mit dem Wert des Eintrags
            console.log(entry);
            let selector: string = "[value='" + entry[1] + "']";
            // Selektieren des HTML-Elements mit dem entsprechenden Wert
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            console.log(item);
            //Neue Tabellenzeile und insgesamt sechs Spalten erstellen
            let row: HTMLElement = document.createElement("tr");
            let td: HTMLElement = document.createElement("td");
            let td2: HTMLElement = document.createElement("td");
            let td3: HTMLElement = document.createElement("td");
            let td4: HTMLElement = document.createElement("td");
            let td5: HTMLElement = document.createElement("td");
            let td6: HTMLElement = document.createElement("td");
            let td7: HTMLElement = document.createElement("td");
            // Erstellen eines Buttons, damit man den Eintrag später auch löschen kann 
            let deleteButton: HTMLButtonElement = document.createElement("button");
            // Hinzufügen eines Mülleimer-Symbols
            deleteButton.classList.add("far", "fa-trash-alt");
            // Switch-Case mit den Namen der Einträge
            switch (entry[0]) {
                case "Menge":
                    break;
                case "Artikel":
                    // Suchen nach dem Preis-Attribut 
                    let itemPrice: number = Number(item.getAttribute("price"));
                    // Wert aus dem Slider abgreufen 
                    let menge: number = Number(formData.get("Menge"));
                    // Wert, um welche Einheit es sich bei dem Artikel handelt suchen 
                    let einheit: string = String(item.getAttribute("unit"));
                    // Eintrag aus dem Supermarkt-Inputfeld suchen 
                    let markt: string = String(formData.get("Bevorzugter Supermarkt"));
                    // Den Preis aus Menge und dem jeweiligen Grundpreis des Artikels berechen
                    itemPrice = menge * itemPrice;
                    // Deklarieren einer Variablen, um den Gesamtpreis (inklusive Service-Gebühr) an 
                    // die Funktion deleteListener zu übergeben 
                    let gesamt: number = itemPrice + 0.5;
                    // Installieren des Event-Listeners auf dem Button und übergeben des Gesamtpreises
                    deleteButton.addEventListener("click", function (): void {
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
                    form.reset();
                    break;
                case "cash":
                    // Suchen nach dem Preis-Attribut 
                    // Der Wert wird rausgesucht und zum String gemacht, um ihn in der if-else Anweisung vergleichen zu können
                    let money: string = String(item.getAttribute("value"));
                    // Wenn der Wert Geld abheben ist, muss der Wert aus dem slider mit den Grundkosten verrechnet werden 
                    if (money == "Geld abheben") {
                        // Der Wert vom Slider wird abgegriffen
                        let bargeld: number = Number(formData.get("bargeld"));
                        // Die Grundgebühr wird hinzugfeügt
                        let geld: number = bargeld + 5;
                        // Die Werte in die Tabellenspalten eintragen
                        td.innerHTML = "" + money;
                        td2.innerHTML = "" + geld + "€";
                        // Den Event-Listener zum Button hinzufügen und den Gesamtpreis übergeben
                        deleteButton.addEventListener("click", function (): void {
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
                        form.reset();
                        break;
                    }
                    else if (money == "Geld einzahlen") {
                        // Im Fall von Geld abheben wird ein Betrag von 5 Euro berechnet
                        // Wie oben wird der Event-Listener installiert, der Preis zum den Gesamtkosten hinzugefügt und das Form-Element geleert
                        td.innerHTML = "" + money;
                        td2.innerHTML = "" + 5 + "€";
                        // Wie oben wird der Event-Listener installiert, alle neuen Elemente ins HTML integriert
                        // der Preis zum den Gesamtkosten hinzugefügt und das Form-Element geleert
                        deleteButton.addEventListener("click", function (): void {
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
                    let itemCost: number = Number(item.getAttribute("price"));
                    // Nach dem selben Prinzip wie oben werden jetzt auch die Haushaltsarbeiten durchgearbeitet
                    td.innerHTML = "" + entry[1];
                    td2.innerHTML = "" + itemCost + "€";
                    deleteButton.addEventListener("click", function (): void {
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

    function deleteList(price: number, _event): void {
        // Der Preis wird vom Gesamtpreis abgezogen und die Anzeige aktualiiert
        totalCost -= price;
        totalPrice.innerHTML = "" + totalCost.toFixed(2);
        // Das Eltern-Element des Eltern-Elements des Buttons soll gelöscht werden.
        // Die enstprechenden Elemente werden selektiert und gelöscht
        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
        let grandParent: Node = <Node>parent.parentNode;
        let greatGrandParent: Node = <Node>grandParent.parentNode;
        parent.removeChild(target);
        grandParent.removeChild(parent);
        greatGrandParent.removeChild(grandParent);
    }

    async function sendOrder(_event: Event): Promise<void> {
        // Wenn der Button zum Abschicken gedrückt wurde, wird in einem Alert-Fenster eine Benachrichtigung mit dem Lieferdatum angezeigt
        let date: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
        let lieferdatum: string = date.value;
        let paypal: HTMLInputElement = <HTMLInputElement>document.getElementById("paypal");
        let überweisung: HTMLInputElement = <HTMLInputElement>document.getElementById("überweisung");
        let zahlungsart: string;
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
        let formData: FormData  = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("haushaltshilfe_data.htm?" + query.toString());
        alert("Ihre Bestellung wurde entgegen genommen. Vielen Dank!");

    }

} 