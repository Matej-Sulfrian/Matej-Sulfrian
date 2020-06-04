"use strict";
var L07_Datenbank;
(function (L07_Datenbank) {
    function generateContent(_data) {
        for (let category in _data) {
            //console.log(category);
            let items = _data[category];
            let group = null;
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
            let space = document.querySelector("#" + category);
            if (HTMLElement && group) {
                if (space != null)
                    space.appendChild(group);
            }
        }
    }
    L07_Datenbank.generateContent = generateContent;
    function createEinkäufe(_items, _category) {
        let group = document.createElement("datalist");
        group.id = "article";
        for (let item of _items) {
            let option = document.createElement("option");
            option.setAttribute("name", _category);
            option.value = item.name;
            option.setAttribute("unit", item.unit);
            option.setAttribute("price", item.price.toFixed(2));
            option.innerHTML = "" + item.name;
            group.appendChild(option);
        }
        return group;
    }
    function createGeschäfte(_items, _category) {
        let group = document.createElement("datalist");
        group.id = "market";
        for (let item of _items) {
            let option = document.createElement("option");
            option.setAttribute("name", _category);
            option.value = item.name;
            option.innerHTML = "" + item.name;
            group.appendChild(option);
        }
        return group;
    }
    function createHaushaltsarbeit(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = "ToDo";
            checkbox.id = item.unit;
            let lable = document.createElement("label");
            lable.htmlFor = item.unit;
            lable.textContent = item.name;
            let br = document.createElement("br");
            group.appendChild(checkbox);
            group.appendChild(lable);
            group.appendChild(br);
        }
        let button = document.createElement("button");
        button.id = "householdDone";
        button.type = "button";
        button.textContent = "Hinzufügen";
        group.appendChild(button);
        return group;
    }
})(L07_Datenbank || (L07_Datenbank = {}));
//# sourceMappingURL=GenerateContent.js.map