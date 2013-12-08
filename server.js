var express = require('express');
var test_app = express();

test_app.use( express.static(__dirname + '/dist'));

test_app.listen(1337);
