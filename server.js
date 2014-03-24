// Create Server and Express Application
var express = require('express');
var http = require('http');
var dp = require('docpad');
var nodemailer = require("nodemailer");

var app = express();
app.configure(function(){
	  app.use(express.bodyParser());
	  app.use(app.router);
	});

var port = Number(process.env.PORT || 8080);
var server = http.createServer(app).listen(port);

app.post('/form/:campaign', function(req, res) {
	var campaign = req.params.campaign;
	console.log(req);
	var body = req.body;
	var email = req.body.email;
	console.log("Body" + JSON.stringify(body));
		
	if (email != null) {

		var receivers = [ "tc@allthingstalk.com", "pl@allthingstalk.com" ];

		var mailOptions = {
			from : "Subscriber <subscriber@allthingstalk.com", // sender address
			to : receivers, // list of receivers
			subject : email + " has subscribed for " + campaign, // Subject line
			text : "Subscription for " + campaign +" "+ JSON.stringify(body)
		}

		smtpTransport.sendMail(mailOptions, function(error, response) {
			if (error) {
				console.log(error);
			} else {
				console.log("Message sent: " + response.message);
			}

			smtpTransport.close();
		});
	} else {
		console.log("No email found");
	}
	
	res.send("Hartelijk bedankt!");
});

// Add DocPad to our Application
var docpadInstanceConfiguration = {
	// Give it our express application and http server
	//		action: 'load ready generate',
	env : 'static',
	serverExpress : app,
	serverHttp : server,

	// Tell it not to load the standard middlewares (as we handled that above)
	middlewareStandard : false
};

var docpadInstance = dp.createInstance(docpadInstanceConfiguration, function(
		err) {
	if (err)
		return console.log(err.stack);
	// Tell DocPad to perform a generation, extend our server with its routes, and watch for changes
	docpad.action('generate server watch', docpadInstanceConfiguration,
			function(err) {
				if (err)
					return console.log(err.stack);
			});
});

var smtpTransport = nodemailer.createTransport("SMTP", {
	service : "Gmail",
	auth : {
		user : "smartlivingiosocial@gmail.com",
		pass : "SmartLiving953"
	}
});