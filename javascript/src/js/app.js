"use strict";

document.getElementById('button').onclick = function() {
	document.getElementsByClassName("popup")[0].style.transform = "translate(-50%, -50%) scale(1)";
	document.getElementsByClassName("mask")[0].style.display = "block";
};

document.getElementsByClassName("close-button")[0].onclick = function() {
	document.getElementsByClassName("popup")[0].style.transform = "translate(-50%, -50%) scale(0)";
	document.getElementsByClassName("mask")[0].style.display = "none";
};

document.getElementsByClassName("close-button")[1].onclick = function() {
	document.getElementsByClassName("popup")[0].style.transform = "translate(-50%, -50%) scale(0)";
	document.getElementsByClassName("mask")[0].style.display = "none";
};
