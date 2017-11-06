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
ctx.lineWidth = 12;
ctx.stroke();

ctx.strokeStyle = "#E53935";

ctx.beginPath();
ctx.translate(100,0);
ctx.moveTo(0,20);
ctx.lineTo(25,20);
ctx.lineTo(35,0);
ctx.lineTo(43,20);
ctx.lineTo(70,20);
ctx.lineTo(50,40);
ctx.lineTo(56,60);
ctx.lineTo(35,50);
ctx.lineTo(15,60);
ctx.lineTo(25,40);
ctx.lineTo(0,20);
ctx.lineTo(30,20);
ctx.lineWidth = 12;
ctx.stroke();