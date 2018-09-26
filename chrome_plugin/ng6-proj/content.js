/*
	Sends message "showPageAction" to eventPage.js
	Recieves "changeColor" from content.js (changes font colors)
*/

// Send a message to eventPage.js
chrome.runtime.sendMessage({ todo:"showPageAction" });

// Listens for messages from popup.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	alert('CONTENT PAGE: ' + request.todo + ' -- ' + request.clickedColor);

	if (request.todo == "changeColor") {
		// Change Color on the Webpage
		var addColor = '#' + request.clickedColor;
		document.getElementById("usage").style.color = addColor;
		document.getElementById("manifest").style.color = addColor;
		var x = document.getElementsByTagName("article");
		x.getElementsByTagName("h1").style.color = addColor;
	}
});