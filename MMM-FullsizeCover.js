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
		// expected notification: showImage // (notification set in MMM-Button config)
		// expected playload: true/false
		// expected sender: MMM-Button or mmm-button?
		if (notification === "showImage" && sender === "MMM-Button") {
			if (payload === true) {
				document.getElementsByClassName("MMM-FullsizeCover")[0].classList.add("show-image");
			}
			else if (payload === false ) {
				document.getElementsByClassName("MMM-FullsizeCover")[0].classList.remove("hide-image");
			}
		}
	},

	getDom: function() {

		wrapper = document.createElement("img");
		wrapper.src =  this.data.path + "/" + this.config.imageFile;
		return wrapper;
	}

});
