'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

var Adjective = function() {
  this.Goofy = true;
  this.Fancy = true;
  this.Cantankerous = true;
  this.Fluffy = true;
  this.Gilded = true;
}
var adjective = new Adjective();

var Verb = function() {
  this.Swimming = true;
  this.Gyrating = true;
  this.Climbing = true;
  this.Raining = true;
  this.Sloshing = true;
}
var verb = new Verb();

var Noun = function() {
  this.Chairs = true;
  this.Typewriters = true;
  this.Tigers = true;
  this.Walnuts = true;
  this.Alaskans = true;
}
var noun = new Noun();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
}

/*FROM F2*/
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/*', function(req, res) {
  res.status(404).sendFile(__dirname + '/app/404.html');
});

app.listen(port, function() {
  console.log('Server is running on port ' + port + '.  Woot!');
});

/*FROM BOOTCAMP*/
// app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/app'));

// app.get('/', function(req, res) {
//   res.send('Hello World!  You made it to my wimpy webpage.');
// });

// app.get('adjective', function(req, res) {
//   res.json();
// })

// app.get('/*', function(req, res) {
//   res.status(404).sendFile(__dirname + '/app/404.html');
// });

// app.listen(app.get('port'), function(){
//   console.log("Node app is running at localhost: " + app.get('port'));
// });