require('@google/cloud-debug');
var express = require('express');
var app = express();

app.use(require('./controllers'))

app.listen(8080, function() {
	console.log('Bot running');
});

//Based on :
//https://www.npmjs.com/package/sinon
//http://bulkan-evcimen.com/testing_with_mocha_sinon
//https://www.terlici.com/2014/08/25/best-practices-express-structure.html