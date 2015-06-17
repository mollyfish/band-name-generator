'use strict';

module.exports = function getRandomWord(object) {
  var number;
  var propArray = Object.keys(object);
  number = Math.floor(Math.random() * propArray.length);
  var randomProp = propArray[number];
  return {word: randomProp};
};