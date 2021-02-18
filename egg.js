var tim;

document.addEventListener('keydown', function(event) {
	if (event.code == 'KeyF' && (event.shiftKey || event.metaKey)) {
		tim=setTimeout(function(){document.getElementById("woman").innerHTML="А ну не шуми, проказник! Ты в библиотеке!!!";}, 5000);
	} 
	else (clearTimeout(tim));
 });

