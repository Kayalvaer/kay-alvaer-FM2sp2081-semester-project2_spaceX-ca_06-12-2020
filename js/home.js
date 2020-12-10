var round = document.getElementById("round");
var btnOpp = document.getElementById("btnOpp");
var btnNed = document.getElementById("btnNed");

var shiftMove = round.style.transform;
var shiftAdd;

btnOpp.onclick = function () {
    shiftAdd = shiftMove + "rotate(-90deg)";
    round.style.transform = shiftAdd;
    shiftMove = shiftAdd;
}
btnNed.onclick = function () {
    shiftAdd = shiftMove + "rotate(90deg)";
    round.style.transform = shiftAdd;
    shiftMove = shiftAdd;
}