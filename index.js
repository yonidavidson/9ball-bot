var express = require('express');
var app = express();
var bot = require('./bot.js')
var bodyParser = require('body-parser-bigint');
var jsonParser = bodyParser.json();
var VERIFY = process.env.NINE_BALL_VERIFY_TOKEN;

app.get('/webhook', function(req, res) {
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']
  res.send(bot.validate(VERIFY, token, challenge));
})

app.post('/webhook', jsonParser, function(req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
      sendTextMessage(sender, 'Text received, echo: ' + text.substring(0, 200));
    }
  }
  console.log('This is a marker for webhook received');;
  res.sendStatus(200);
})

function sendTextMessage(sender, text) {
  console.log('Sending message from sender:' + sender + ', message' + text);
  messageData = {
    text: text,
  }
  senderString = sender.toString()
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: token},
    method: 'POST',
    json: {
      recipient: {id: senderString},
      message: messageData,
    },
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}

app.listen(8080, function() {
  console.log('Bot running');
});