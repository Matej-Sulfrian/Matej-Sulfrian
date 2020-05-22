namespace L05_Clien {

    export interface Auswahl {
        name: string;
        unit: string;
        price: number;
    }

    export interface Data {
        [category: string]: Auswahl[];
    }
    
    export function generateContent(_data: Data): void {

        for (let category in _data) {
            //console.log(category);
            let items: Auswahl[] = _data[category];

            let group: HTMLElement | null = null;

            switch (category) {
                case "Einkäufe":
                    group = createEinkäufe(items, category);
                    break;
                case "Geschäfte":
                    group = createGeschäfte(items, category);
                    break;
                case "household":
                    group = createHaushaltsarbeit(items, category);
                    break;
            
                default:
                    break;
            }
            
            let space: HTMLElement | null = document.querySelector("#" + category);
            if (HTMLElement && group) {
                if (space != null)
                space.appendChild(group);
            }
        }
    }

    function createEinkäufe(_items: Auswahl[], _category: string): HTMLElement {
        let group: HTMLElement = document.createElement("datalist");
        group.id = "article";
        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("name", _category);
            option.value = item.name;
            option.setAttribute("unit", item.unit);
            option.setAttribute("price", item.price.toFixed(2));
            option.innerHTML = "" + item.name;
            group.appendChild(option);
        }
        return group;
    }

    function createGeschäfte(_items: Auswahl[], _category: string): HTMLElement {
        let group: HTMLElement = document.createElement("datalist");
        group.id = "market";
        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("name", _category);
            option.value = item.name;
            option.innerHTML = "" + item.name;
            group.appendChild(option);
        }
        return group;
    }

    function createHaushaltsarbeit(_items: Auswahl[], _category: string): HTMLElement {
        let group: HTMLElement = document.createElement("div");
        for (let item of _items) {
            
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = "ToDo";
            checkbox.id = item.unit;

            let lable: HTMLLabelElement = document.createElement("label");
            lable.htmlFor = item.unit;
            lable.textContent = item.name;

            let br: HTMLElement = document.createElement("br");

            group.appendChild(checkbox);
            group.appendChild(lable);
            group.appendChild(br);
            
        }

        let button: HTMLButtonElement = document.createElement("button");
        button.id = "householdDone";
        button.type = "button";
        button.textContent = "Hinzufügen";
        group.appendChild(button);

        return group;
    }

}