/*global console, alert, prompt */
var number = document.getElementById('number');
var shown = document.getElementById('shown');
var hiden = document.getElementById('hiden');
shown.onclick = function(){
	number.innerHTML = "+2126-42-54-64-45";
	shown.style.display = "none";
	hiden.style.display = "block";
};
hiden.onclick = function(){
	number.innerHTML = "+2126-XX-XX-XX-XX";
	shown.style.display = "block";
	hiden.style.display = "none";
};
