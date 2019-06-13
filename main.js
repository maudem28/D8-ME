function uselessWebButton(button, popup) {
	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;
	var randomRange = 15;

	// Useless websites: url | uses flash
	// Commented out websites which have crashed.
	var sitesList = [

	var sites = null;

	// Prepares and binds the button
	var init = function() {
		button.onclick = onButtonClick;
		sites = sitesList.slice(0);
	};

	// Selects and removes the next website from the list
	var selectWebsite = function() {
		var site, range, index;

		range = randomRange > sites.length ? sites.length : randomRange;
		index = Math.floor(Math.random() * range);

		site = sites[index];
		sites.splice(index, 1);

		return site;
	};

	var onButtonClick = function() {
		// Change text from "TO A"
		if (initialClick === false) {
			document.getElementById("joint").innerHTML = "TO ANOTHER";
			initialClick = true;
		}

		var url = selectWebsite()[0];
		window.open(url);

		// User has visited ALL the sites... refresh the list.
		if (sites.length == 0) {
			sites = sitesList.slice(0);
		}

	};

	init();
}
