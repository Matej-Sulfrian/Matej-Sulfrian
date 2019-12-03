//Sound Function
function playSample(sample) {
    var sound = new Audio("sounds/" + sample);
    sound.play();
}
//Button 1 Kick
window.addEventListener("load", function () {
    document.querySelector("#pad1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
});
//Button 2 Snare
window.addEventListener("load", function () {
    document.querySelector("#pad2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
});
//Button 3 Hihat
window.addEventListener("load", function () {
    document.querySelector("#pad3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
});
//Button 4 Foghorn
window.addEventListener("load", function () {
    document.querySelector("#pad4").addEventListener("mousedown", function () { playSample("foghorn.mp3"); });
});
//Button 5 Mr Happy
window.addEventListener("load", function () {
    document.querySelector("#pad5").addEventListener("mousedown", function () { playSample("mrhappy.mp3"); });
});
//Button 6 Dead Limit
window.addEventListener("load", function () {
    document.querySelector("#pad6").addEventListener("mousedown", function () { playSample("deadlimit.mp3"); });
});
//Button 7 X-Ray
window.addEventListener("load", function () {
    document.querySelector("#pad7").addEventListener("mousedown", function () { playSample("xray.mp3"); });
});
//Button 8 Siren
window.addEventListener("load", function () {
    document.querySelector("#pad8").addEventListener("mousedown", function () { playSample("siren.mp3"); });
});
//Button 9 Blow Them Away
window.addEventListener("load", function () {
    document.querySelector("#pad9").addEventListener("mousedown", function () { playSample("blowthemaway.mp3"); });
});
//Button 10 Take You Higher 1
window.addEventListener("load", function () {
    document.querySelector("#pad10").addEventListener("mousedown", function () { playSample("tyh1.mp3"); });
});
//Button 11 Take You Higher 2
window.addEventListener("load", function () {
    document.querySelector("#pad11").addEventListener("mousedown", function () { playSample("tyh2.mp3"); });
});
//Button 12 Take You Higher 3
window.addEventListener("load", function () {
    document.querySelector("#pad12").addEventListener("mousedown", function () { playSample("tyh3.mp3"); });
});
//Button 13 If We Ever
window.addEventListener("load", function () {
    document.querySelector("#pad13").addEventListener("mousedown", function () { playSample("ifweever.mp3"); });
});
//Button 14 Afterglow 1
window.addEventListener("load", function () {
    document.querySelector("#pad14").addEventListener("mousedown", function () { playSample("afterglow1.mp3"); });
});
//Button 15 Afterglow 2
window.addEventListener("load", function () {
    document.querySelector("#pad15").addEventListener("mousedown", function () { playSample("afterglow2.mp3"); });
});
//Button 16 Stormin MC
window.addEventListener("load", function () {
    document.querySelector("#pad16").addEventListener("mousedown", function () { playSample("buzzit.mp3"); });
});
//Auto Beat 1
window.addEventListener("load", function () {
    document.querySelector("#play").addEventListener("mousedown", drumbeat);
});
function drumbeat() {
    var beatElements = ["sounds/kick.mp3", "sounds/hihat.mp3", "sounds/snare.mp3", "sounds/hihat.mp3", "sounds/hihat.mp3", "sounds/kick.mp3", "sounds/snare.mp3", "sounds/hihat.mp3"];
    var index = 0;
    var tempo = setInterval(dnbBeat, 173);
    function dnbBeat() {
        var MyMelody = new Audio(beatElements[index]);
        MyMelody.play();
        index += 1;
        if (index > 7)
            index = 0;
    }
    document.querySelector("#pause").addEventListener("mousedown", stop);
    function stop() {
        clearInterval(tempo);
    }
}
//# sourceMappingURL=script.js.map