"use strict";

var a = 0;
document.getElementById('menu-button').onclick = function() {
	if (a == 0) {
		document.getElementById('circle-shape').style.transform = "scale(500)";
		document.getElementById('menu-button').className += "close-button";
		
		setTimeout(function(){
			document.getElementById('menu-box').style.transform = "translate(0,0)";			
			document.getElementById('menu-box').style.opacity = 1;			
		}, 400);
		
		a = 1;
	} else {
		document.getElementById('menu-box').style.transform = "translate(0,10%)";
		document.getElementById('menu-box').style.opacity = 0;		
		document.getElementById('menu-button').classList.remove("close-button");
		
		setTimeout(function(){
			document.getElementById('circle-shape').style.transform = "scale(0)";	
		}, 100);
		
		a = 0;
	}
};