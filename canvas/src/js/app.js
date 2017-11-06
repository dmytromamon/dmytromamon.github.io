var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

ctx.strokeStyle = "#7E57C2";

ctx.beginPath();
ctx.translate(50,50);
ctx.moveTo(35,0);
ctx.lineTo(70,60);
ctx.lineTo(00,60);
ctx.lineTo(35,0);
ctx.lineTo(70,60);
ctx.lineWidth = 10;
ctx.stroke();

ctx.translate(120,0);

ctx.strokeStyle = "#E53935";

ctx.beginPath();
ctx.moveTo(2,25);
ctx.lineTo(27,25);
ctx.lineTo(35,0);
ctx.lineTo(43,25);
ctx.lineTo(68,25);
ctx.lineTo(48,40);
ctx.lineTo(55,64);
ctx.lineTo(35,49);
ctx.lineTo(15,64);
ctx.lineTo(22,40);
ctx.lineTo(2,25);
ctx.lineTo(27,25);
ctx.lineWidth = 10;
ctx.stroke();