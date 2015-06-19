'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var Guitarist = require('./lib/guitarist.js');
var getRandomWord = require('./lib/getRandomWord.js');
var getGuitarist = require('./lib/getGuitarist.js');
var postRandomWord = require('./lib/postRandomWord.js');
var app = express();
var port = process.env.PORT || 3000;

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();
var guitarist = new Guitarist();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

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

app.get('/guitarist', function(req, res) {
  res.json(getGuitarist(guitarist));
});

app.get('/*', function(req, res) {
  res.status(404).sendFile(__dirname + '/app/404.html');
});

app.post('/adjective', function(req, res) {
  var word = postRandomWord(req.body.word, adjective);
  res.json(word);
});

app.post('/verb', function(req, res) {
  var word = postRandomWord(req.body.word, verb);
  res.json(word);
});

app.post('/noun', function(req, res) {
  var word = postRandomWord(req.body.word, noun);
  res.json(word);
});

app.listen(port, function() {
  console.log('Server is running on port ' + port + '.  Woot!');
});
