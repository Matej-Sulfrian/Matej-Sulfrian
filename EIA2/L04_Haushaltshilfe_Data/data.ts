namespace L04_Haushaltshilfe {
    
    export interface Auswahl {
        name: string;
        unit: string;
        price: number;
    }

    export interface Data {
        [category: string]: Auswahl[];
    }

    export let data: Data = {
        Einkäufe: [
            { name: "Brot", unit: "Laib", price: 2.00},
            { name: "Eier", unit: "10er Packung", price: 2.50},
            { name: "Milch", unit: "1L Karton", price: 0.78},
            { name: "Mehl", unit: "1kg", price: 1.40},
            { name: "Äpfel", unit: "1kg", price: 2.00},
            { name: "Hefe", unit: "Würfel", price: 0.10},
            { name: "Nudel", unit: "500g", price: 1.50},
            { name: "Klopapier", unit: "Packung", price: 2.50},
            { name: "Wasser", unit: "1l Flasche", price: 0.50},
            { name: "Orangensaft", unit: "1L Flasche", price: 1.00}
        ],
        Geschäfte: [
            { name: "Rewe", unit: "", price: 0},
            { name: "Aldi", unit: "", price: 0},
            { name: "Lidl", unit: "", price: 0},
            { name: "Edeka", unit: "", price: 0}
        ],
        household: [
            { name: "Putzdienst", unit: "putzdienst", price: 20},
            { name: "Medikamente besorgen", unit: "edikamente", price: 15},
            { name: "Post abholen", unit: "abholen", price: 5},
            { name: "Post wegbringen", unit: "wegbringen", price: 5},
            { name: "Rasen mähen", unit: "rasen", price: 20},
            { name: "Gassi gehen", unit: "gassi", price: 10}
        ]
    };
}