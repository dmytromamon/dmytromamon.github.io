"use strict";

var a = 0;
document.getElementById('menu-button').onclick = function() {
	if (a == 0) {
		document.getElementById('menu-box').style.transform = "translate(0,0)";
		document.getElementById('menu-button').className += "close-button";
		
		a = 1;
	} else {
		document.getElementById('menu-box').style.transform = "translate(100%,0)";
		document.getElementById('menu-button').classList.remove("close-button");
		
		a = 0;
	}
};