var express = require('express'),
	app = express();

var oneDay = 86400000;
var wwwroot = __dirname + "/out/";

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static(wwwroot, { maxAge: oneDay }));

app.get('/experiments/doorbell-notifier', function(req, res){
	  res.writeHead(302, {
	  'Location': 'http://docs.smartliving.io/Experiments/Tell_me_if_someone_is_at_the_door'
	});
	res.end();
});

app.get('/experiments/guard-my-phone', function(req, res){
	  res.writeHead(302, {
	  'Location': 'http://docs.smartliving.io/Experiments/Get_warned_when_your_smartphone_is_unplugged'
	});
	res.end();
});

app.get('/experiments/luxmeter', function(req, res){
	  res.writeHead(302, {
	  'Location': 'http://docs.smartliving.io/Experiments/Sense_and_interpret_light_value'
	});
	res.end();
});

app.get('/experiments/motion-detector', function(req, res){
	  res.writeHead(302, {
	  'Location': 'http://docs.smartliving.io/Experiments/Detect_if_something_is_moving'
	});
	res.end();
});

app.get('/experiments/shopping-window', function(req, res){
	  res.writeHead(302, {
	  'Location': 'http://docs.smartliving.io/Experiments/Interactive_shopping_window'
	});
	res.end();
});

app.get('/', function(req, res){

	console.l

	if(req.get('host') == "smartliving.io"){
	  res.writeHead(302, {
	  'Location': 'http://www.smartliving.io'
	});
	}
	res.end();
});



console.log("WWWROOT" + wwwroot);

app.listen(process.env.PORT || 9778);