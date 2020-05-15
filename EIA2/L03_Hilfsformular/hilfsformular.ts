namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#aufgaben");
        let zahlung: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Zahlungsmethode");

        form.addEventListener("change", handleChange);
        zahlung.addEventListener("input", handleChange);
    }

    function handleChange(_event: Event): void {
        // console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);

        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);

        console.log("change noticed");

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            order.innerHTML += item.name + "  € " + price;
            console.log(formData);
        }
    }
}
