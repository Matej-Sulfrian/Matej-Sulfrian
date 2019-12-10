window.addEventListener("load", function () {
    //Button Play
    document.querySelector("#play").addEventListener("click", playBeat);
    //Button Record
    document.querySelector("#rec").addEventListener("click", recordBeat);
    //Button Delete
    document.querySelector("#delete").addEventListener("click", deleteBeat);
    //Button 1 Kick
    document.querySelector("#pad1").addEventListener("mousedown", function () { playSample1("kick.mp3"); });
    //Button 2 Snare
    document.querySelector("#pad2").addEventListener("mousedown", function () { playSample1("snare.mp3"); });
    //Button 3 Hihat
    document.querySelector("#pad3").addEventListener("mousedown", function () { playSample1("hihat.mp3"); });
    //Button 4 Foghorn
    document.querySelector("#pad4").addEventListener("mousedown", function () { playSample1("foghorn.mp3"); });
    //Button 5 Mr Happy
    document.querySelector("#pad5").addEventListener("mousedown", function () { playSample1("mrhappy.mp3"); });
    //Button 6 Dead Limit
    document.querySelector("#pad6").addEventListener("mousedown", function () { playSample1("deadlimit.mp3"); });
    //Button 7 X-Ray
    document.querySelector("#pad7").addEventListener("mousedown", function () { playSample1("xray.mp3"); });
    //Button 8 Siren
    document.querySelector("#pad8").addEventListener("mousedown", function () { playSample1("siren.mp3"); });
    //Button 9 Blow Them Away
    document.querySelector("#pad9").addEventListener("mousedown", function () { playSample1("blowthemaway.mp3"); });
    //Button 10 Take You Higher 1
    document.querySelector("#pad10").addEventListener("mousedown", function () { playSample1("tyh1.mp3"); });
    //Button 11 Take You Higher 2
    document.querySelector("#pad11").addEventListener("mousedown", function () { playSample1("tyh2.mp3"); });
    //Button 12 Take You Higher 3
    document.querySelector("#pad12").addEventListener("mousedown", function () { playSample1("tyh3.mp3"); });
    //Button 13 If We Ever
    document.querySelector("#pad13").addEventListener("mousedown", function () { playSample1("ifweever.mp3"); });
    //Button 14 Afterglow 1
    document.querySelector("#pad14").addEventListener("mousedown", function () { playSample1("afterglow1.mp3"); });
    //Button 15 Afterglow 2
    document.querySelector("#pad15").addEventListener("mousedown", function () { playSample1("afterglow2.mp3"); });
    //Button 16 Stormin MC
    document.querySelector("#pad16").addEventListener("mousedown", function () { playSample1("buzzit.mp3"); });
});
//Sound Function
var beatElements = ["kick.mp3", "hihat.mp3", "snare.mp3", "hihat.mp3", "hihat.mp3", "kick.mp3", "snare.mp3", "hihat.mp3"];
var record = false;
function playSample1(sample) {
    var sound = new Audio("sounds/" + sample);
    sound.play();
    if (record == true) {
        beatElements.push(sample);
    }
}
//Beat Function
var tempo;
var index = 0;
function playBeat() {
    //Button Play
    if (document.getElementById("play").classList.contains("fa-play-circle")) {
        document.getElementById("play").classList.remove("fa-play-circle");
        document.getElementById("play").classList.add("fa-stop-circle");
        tempo = setInterval(dnb, 300);
        record = false;
    }
    //Button Stop
    else {
        document.getElementById("play").classList.remove("fa-stop-circle");
        document.getElementById("play").classList.add("fa-play-circle");
        clearInterval(tempo);
    }
}
//Standard Beat
function dnb() {
    playSample1(beatElements[index]);
    index += 1;
    console.log(index);
    if (index > (beatElements.length - 1))
        index = 0;
}
//Button Delete
function deleteBeat() {
    beatElements.length = 0;
}
//Button Record
function recordBeat() {
    record = true;
}
//# sourceMappingURL=script.js.map