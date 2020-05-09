var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        var form = document.querySelector("div#aufgaben");
        var zahlung = document.querySelector("div#Zahlungsmethode");
        form.addEventListener("change", handleChange);
        zahlung.addEventListener("input", handleChange);
    }
    function handleChange(_event) {
        // console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        console.log("change noticed");
        var order = document.querySelector("div#order");
        order.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + "  € " + price;
            console.log(formData);
        }
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=hilfsformular.js.map