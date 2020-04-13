var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(95,45,20,95,45,100);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "yellow");
ctx.fillStyle = grd;
ctx.fillRect(5, 5, 190, 90);

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.moveTo(0, 100);
ctx.lineTo(200, 0);
ctx.stroke();

var grd2 = ctx.createLinearGradient(0, 0, 80, 0);
grd2.addColorStop(0, "red");
grd2.addColorStop(1, "grey");

ctx.font = "30px Arial";
ctx.fillStyle = grd2;
ctx.fillText("123", 10, 50);