//Load express 
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser-bigint');
var jsonParser = bodyParser.json();
const verify_token = process.env.verify_token
const token = process.env.token;
console.log("verify_token = " + verify_token + ". token = " + token);

app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === verify_token) {
  	console.log("Token verified");;
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});


app.post('/webhook/', jsonParser, function (req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
  	  sendTextMessage(sender, "Text received, echo: "+ text.substring(0, 200));
    }
  }
  console.log("This is a marker for webhook received");;
  res.sendStatus(200);
});

function sendTextMessage(sender, text) {
  console.log("Sending message from sender:"+ sender+", message" + text);
  messageData = {
    text:text
  }
  senderString = sender.toString()
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:token},
    method: 'POST',
    json: {
      recipient: {id:senderString},
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}

//Run our app 
app.listen(process.env.PORT, function() {
	console.log('Bot running');
});