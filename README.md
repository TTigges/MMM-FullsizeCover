# MMM-FullsizeCover
This an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It is intended to be used with [MMM-Button](https://github.com/PtrBld/MMM-Button). The button activates a fullsize cover with an image that covers the whole screen.
## Installation
Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/TTigges/MMM-FullsizeCover`.
## Dependencies
*Note:* This module does nothing (visibly) if it's not activated by a notification via [MMM-Button](https://github.com/PtrBld/MMM-Button).
## Using the module
Add the module to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-FullsizeCover',
		config: {
			imageFile: "test.jpg"	// the image has to be within the module folder
		}
	}

]
````
##Developer Notes
This is a quickly written module for [request](https://forum.magicmirror.builders/topic/6236/show-a-picture-infont-of-everything-with-a-button) on the [MagicMirror Forum](https://forum.magicmirror.builders).
As I have no button to test with, I cannot guarantee that the communication between both modules works. Let me know if you have any issues or suggestions for improvement.

The MIT License (MIT)
=====================

Copyright © 2016 PtrBld

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
