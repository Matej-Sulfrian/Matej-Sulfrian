//Daten
var Asia2018 = 16274.1;
var Asia2008 = 12954.7;
var Australia2018 = 2100.5;
var Australia2008 = 1993;
var NorthAmerica2018 = 6035.6;
var NorthAmerica2008 = 6600.4;
var SouthAmerica2018 = 1261.5;
var SouthAmerica2008 = 1132.6;
var Africa2018 = 1235.5;
var Africa2008 = 1028;
var Europe2018 = 4209.3;
var Europe2008 = 4965.7;
var totalEmission2018 = Europe2018 + Africa2018 + SouthAmerica2018 + NorthAmerica2018 + Australia2018 + Asia2018;
//Text
var h1 = "Carbon Dioxide Emissions in ";
var absoluteText = "Emission absolute of ";
var relativeText = "Relative to total world's emission ";
var growthaText = "Growth rate between 2008 and 2018 (absolute)";
var growthpText = "Growth rate between 2008 and 2018 (in %)";
//Europe
var EuropeTotal = Europe2008 * 100 / totalEmission2018;
var EuropeGrowtha = Europe2018 - Europe2008;
var EuropeGrowthp = (Europe2018 - Europe2008) * 100 / Europe2008;
var EuropeTotalBerg = Europe2008 * 100 / totalEmission2018 * 5;
function Europe() {
    document.querySelector("h1").innerHTML = h1 + "Europe";
    //Section 1
    document.querySelector(".absolute").innerHTML = Europe2018.toFixed(1) + " kg CO2";
    document.querySelector(".absoluteText").innerHTML = absoluteText + "Europe in 2018";
    //Section 2
    document.querySelector(".relative").innerHTML = EuropeTotal.toFixed(1) + " %";
    document.querySelector(".relativeText").innerHTML = relativeText;
    //Section 3
    document.querySelector(".growtha").innerHTML = EuropeGrowtha.toFixed(1).toString() + " kg CO2";
    document.querySelector(".growthaText").innerHTML = growthaText;
    //Section 4
    document.querySelector(".growthp").innerHTML = EuropeGrowthp.toFixed(1).toString() + " %";
    document.querySelector(".growthpText").innerHTML = growthpText;
    //chartWrapper
    document.querySelector(".berg").setAttribute("style", "width:" + EuropeTotalBerg.toFixed(0) + "%");
}
window.addEventListener("load", function () {
    document.querySelector(".Europe").addEventListener("click", Europe);
});
//North America
var NorthAmericaTotal = NorthAmerica2018 * 100 / totalEmission2018;
var NorthAmericaGrowtha = NorthAmerica2018 - NorthAmerica2008;
var NorthAmericaGrowthp = (NorthAmerica2018 - NorthAmerica2008) * 100 / NorthAmerica2008;
var NorthAmericaTotalBerg = NorthAmerica2018 * 100 / totalEmission2018 * 5;
function NorthAmerica() {
    document.querySelector("h1").innerHTML = h1 + "North America";
    //Section 1
    document.querySelector(".absolute").innerHTML = NorthAmerica2018.toFixed(1) + " kg CO2";
    document.querySelector(".absoluteText").innerHTML = absoluteText + "North America in 2018";
    //Section 2
    document.querySelector(".relative").innerHTML = NorthAmericaTotal.toFixed(1) + " %";
    document.querySelector(".relativeText").innerHTML = relativeText;
    //Section 3
    document.querySelector(".growtha").innerHTML = NorthAmericaGrowtha.toFixed(1).toString() + " kg CO2";
    document.querySelector(".growthaText").innerHTML = growthaText;
    //Section 4
    document.querySelector(".growthp").innerHTML = NorthAmericaGrowthp.toFixed(1).toString() + " %";
    document.querySelector(".growthpText").innerHTML = growthpText;
    //chartWrapper
    document.querySelector(".berg").setAttribute("style", "width:" + NorthAmericaTotalBerg.toFixed(0) + "%");
}
window.addEventListener("load", function () {
    document.querySelector(".NorthAmerica").addEventListener("click", NorthAmerica);
});
//South America
var SouthAmericaTotal = SouthAmerica2018 * 100 / totalEmission2018;
var SouthAmericaGrowtha = SouthAmerica2018 - SouthAmerica2008;
var SouthAmericaGrowthp = (SouthAmerica2018 - SouthAmerica2008) * 100 / SouthAmerica2008;
var SouthAmericaTotalBerg = SouthAmerica2018 * 100 / totalEmission2018 * 10;
function SouthAmerica() {
    document.querySelector("h1").innerHTML = h1 + "South America";
    //Section 1
    document.querySelector(".absolute").innerHTML = SouthAmerica2018.toFixed(1) + " kg CO2";
    document.querySelector(".absoluteText").innerHTML = absoluteText + "South America in 2018";
    //Section 2
    document.querySelector(".relative").innerHTML = SouthAmericaTotal.toFixed(1) + " %";
    document.querySelector(".relativeText").innerHTML = relativeText;
    //Section 3
    document.querySelector(".growtha").innerHTML = SouthAmericaGrowtha.toFixed(1).toString() + " kg CO2";
    document.querySelector(".growthaText").innerHTML = growthaText;
    //Section 4
    document.querySelector(".growthp").innerHTML = SouthAmericaGrowthp.toFixed(1).toString() + " %";
    document.querySelector(".growthpText").innerHTML = growthpText;
    //chartWrapper
    document.querySelector(".berg").setAttribute("style", "width:" + SouthAmericaTotalBerg.toFixed(0) + "%");
}
window.addEventListener("load", function () {
    document.querySelector(".SouthAmerica").addEventListener("click", SouthAmerica);
});
//Africa
var AfricaTotal = Africa2018 * 100 / totalEmission2018;
var AfricaGrowtha = Africa2018 - Africa2008;
var AfricaGrowthp = (Africa2018 - Africa2008) * 100 / Africa2008;
var AfricaTotalBerg = Africa2018 * 100 / totalEmission2018 * 10;
function Africa() {
    document.querySelector("h1").innerHTML = h1 + "Africa";
    //Section 1
    document.querySelector(".absolute").innerHTML = Africa2018.toFixed(1) + " kg CO2";
    document.querySelector(".absoluteText").innerHTML = absoluteText + "Africa in 2018";
    //Section 2
    document.querySelector(".relative").innerHTML = AfricaTotal.toFixed(1) + " %";
    document.querySelector(".relativeText").innerHTML = relativeText;
    //Section 3
    document.querySelector(".growtha").innerHTML = AfricaGrowtha.toFixed(1).toString() + " kg CO2";
    document.querySelector(".growthaText").innerHTML = growthaText;
    //Section 4
    document.querySelector(".growthp").innerHTML = AfricaGrowthp.toFixed(1).toString() + " %";
    document.querySelector(".growthpText").innerHTML = growthpText;
    //chartWrapper
    document.querySelector(".berg").setAttribute("style", "width:" + AfricaTotalBerg.toFixed(0) + "%");
}
window.addEventListener("load", function () {
    document.querySelector(".Africa").addEventListener("click", Africa);
});
//Asia
var AsiaTotal = Asia2018 * 100 / totalEmission2018;
var AsiaGrowtha = Asia2018 - Asia2008;
var AsiaGrowthp = (Asia2018 - Asia2008) * 100 / Asia2008;
var AsiaTotalBerg = Asia2018 * 100 / totalEmission2018 * 3;
function Asia() {
    document.querySelector("h1").innerHTML = h1 + "Asia";
    //Section 1
    document.querySelector(".absolute").innerHTML = Asia2018.toFixed(1) + " kg CO2";
    document.querySelector(".absoluteText").innerHTML = absoluteText + "Asia in 2018";
    //Section 2
    document.querySelector(".relative").innerHTML = AsiaTotal.toFixed(1) + " %";
    document.querySelector(".relativeText").innerHTML = relativeText;
    //Section 3
    document.querySelector(".growtha").innerHTML = AsiaGrowtha.toFixed(1).toString() + " kg CO2";
    document.querySelector(".growthaText").innerHTML = growthaText;
    //Section 4
    document.querySelector(".growthp").innerHTML = AsiaGrowthp.toFixed(1).toString() + " %";
    document.querySelector(".growthpText").innerHTML = growthpText;
    //chartWrapper
    document.querySelector(".berg").setAttribute("style", "width:" + AsiaTotalBerg.toFixed(0) + "%");
}
window.addEventListener("load", function () {
    document.querySelector(".Asia").addEventListener("click", Asia);
});
//Australia
var AustraliaTotal = Australia2008 * 100 / totalEmission2018;
var AustraliaGrowtha = Australia2018 - Australia2008;
var AustraliaGrowthp = (Australia2018 - Australia2008) * 100 / Australia2008;
var AustraliaTotalBerg = Australia2008 * 100 / totalEmission2018 * 10;
function Australia() {
    document.querySelector("h1").innerHTML = h1 + "Australia";
    //Section 1
    document.querySelector(".absolute").innerHTML = Australia2018.toFixed(1) + " kg CO2";
    document.querySelector(".absoluteText").innerHTML = absoluteText + "Australia in 2018";
    //Section 2
    document.querySelector(".relative").innerHTML = AustraliaTotal.toFixed(1) + " %";
    document.querySelector(".relativeText").innerHTML = relativeText;
    //Section 3
    document.querySelector(".growtha").innerHTML = AustraliaGrowtha.toFixed(1).toString() + " kg CO2";
    document.querySelector(".growthaText").innerHTML = growthaText;
    //Section 4
    document.querySelector(".growthp").innerHTML = AustraliaGrowthp.toFixed(1).toString() + " %";
    document.querySelector(".growthpText").innerHTML = growthpText;
    //chartWrapper
    document.querySelector(".berg").setAttribute("style", "width:" + AustraliaTotalBerg.toFixed(0) + "%");
}
window.addEventListener("load", function () {
    document.querySelector(".Australia").addEventListener("click", Australia);
});
//# sourceMappingURL=script.js.map