var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var grd1 = ctx.createLinearGradient(0,0,document.body.clientWidth,document.body.clientHeight);
grd1.addColorStop(0, "#673AB7");
grd1.addColorStop(1, "#311B92");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

ctx.fillStyle = grd1;
ctx.fillRect(0,0,document.body.clientWidth,document.body.clientHeight);

ctx.strokeStyle = "#fff";

//ctx.beginPath();
//ctx.translate(50,50);
//ctx.moveTo(35,0);
//ctx.lineTo(70,60);
//ctx.lineTo(0,60);
//ctx.lineTo(35,0);
//ctx.lineTo(70,60);
//ctx.lineWidth = 10;
//ctx.stroke();
//
//ctx.translate(120,0);
//
//
//ctx.beginPath();
//ctx.moveTo(2,25);
//ctx.lineTo(27,25);
//ctx.lineTo(35,0);
//ctx.lineTo(43,25);
//ctx.lineTo(68,25);
//ctx.lineTo(48,40);
//ctx.lineTo(55,64);
//ctx.lineTo(35,49);
//ctx.lineTo(15,64);
//ctx.lineTo(22,40);
//ctx.lineTo(2,25);
//ctx.lineTo(27,25);
//ctx.lineWidth = 10;
//ctx.stroke();
//
//ctx.translate(180, 0);
//
//ctx.beginPath();
//ctx.arc(0,35,35,Math.PI*1/2,Math.PI*1.5,false);
//ctx.stroke();
//
//ctx.translate(120, 0);
//
//ctx.beginPath();
//ctx.arc(0,35,35,0,Math.PI*2,true);
//ctx.stroke();

var a = 300;
var i;
var t;
var x;
var y;
var s; 
var sx = [];
var sy = [];
var tx;
var ty;
var twx;
var twy;
//size
for (i = 0; i < a; i++) {
	x = Math.floor((Math.random() * document.body.clientWidth) + 1);
	y = Math.floor((Math.random() * document.body.clientHeight) + 1);
	s = Math.floor((Math.random() * 5) + 1);
//	random from 1 to 9
	
	ctx.beginPath();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.lineWidth = .2;
	ctx.arc(x,y,s/10,0,Math.PI*2,true);	
	ctx.stroke();
	sx.push(x);
	sy.push(y);
	
}	

for (var t = 0; t < sx.length; t++) {
  for (var tx = 0; tx < sx.length; tx++) {
		twx = sx[t] - sx[tx];
		twy = sy[t] - sy[tx];
		
		twx = twx*twx + twy*twy;
		twx = Math.sqrt(twx);	
		
		if (twx < 100) {	
			ctx.beginPath();
			ctx.lineWidth = 0.2;
			ctx.moveTo(sx[t],sy[t]);
			ctx.lineTo(sx[tx],sy[tx]);
			ctx.closePath();
			ctx.stroke();					
		}			
	}
}