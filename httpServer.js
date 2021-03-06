var express = require('express'),
	app = express();

var oneDay = 86400000;
var wwwroot = __dirname + "/out/";
app.use(express.static(wwwroot, { maxAge: oneDay }));

app.listen(process.env.PORT || 3000);