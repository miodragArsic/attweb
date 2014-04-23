var express = require('express'),
	app = express(),
	nodemailer = require('nodemailer');

var oneDay = 86400000;
var wwwroot = __dirname + "/src/documents/";
app.use(express.static(wwwroot, { maxAge: oneDay }));
app.use(express.bodyParser());

app.listen(process.env.PORT || 3000);

app.post('/shout', function(req, res) {
	
	var email 	= req.param('email'),
		name	= req.param('name'),
		message	= req.param('message')

	console.log("Heres the email: " + email);
		
	if (email != null) {

		var smtpTransport = nodemailer.createTransport("SMTP", {
			service : "Gmail",
			auth : {
				user : "smartlivingiosocial@gmail.com",
				pass : "SmartLiving953"
			}
		});

		var receivers = ["np@allthingstalk.com"];

		var mailOptions = {
			from : email, // sender address
			to : receivers, // list of receivers
			subject : name + " has shouted at you!", // Subject line
			text : message
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