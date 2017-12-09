# node-nude

Node.js port of [nude.js](https://github.com/pa7/nude.js) by [Patrick Wied](https://github.com/pa7).

## Why I forked this package
My fork read images from a remote url instead of local disk

## Installation

`npm install nude`

## Usage overview

	var nude = require('nude');

	nude.scan('<IMAGE_URL>', function(res) {
	  console.log('Contains nudity: ' + res);
	});
