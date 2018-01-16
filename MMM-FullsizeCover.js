/* 
 * Magic Mirror
 * Module: MMM-FullsizeCover
 *
 * MIT Licensed.
 */

Module.register('MMM-FullsizeCover',{
	requiresVersion: "2.1.0", // depending on MMM-Button

	defaults: {
		imageFile: "test.jpg"
	},

	start: function() {
		Log.info('Starting module: ' + this.name);
	},

	getStyles: function() {
		return [
			this.file("fullsizecover.css")
		]
	},

	notificationReceived: function(notification, payload, sender) {
		// expected notification: BUTTON_PRESSED // (notification set in MMM-Button config)
		// expected playload: true/false
		// expected sender: MMM-Button or mmm-button?
		if (notification === "BUTTON_PRESSED" && sender === "MMM-Button") {
			var cover = document.getElementsByClassName("MMM-FullsizeCover");
			if (cover[0].classList.contains("hide-image")) {
				cover[0].classList.remove("hide-image");
				cover[0].classList.add("show-image");
			}
			else if (cover[0].classList.contains("show-image")) {
				cover[0].classList.remove("show-image");
				cover[0].classList.add("hide-image");
			}
			else {
				cover[0].classList.add("show-image");
			}
		}
	},

	getDom: function() {
		document.getElementsByClassName("MMM-FullsizeCover")[0].classList.remove("hide-image");
		wrapper = document.createElement("img");
		wrapper.src =  this.data.path + "/" + this.config.imageFile;
		return wrapper;
	}

});
