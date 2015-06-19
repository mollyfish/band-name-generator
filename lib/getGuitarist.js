'use strict';

module.exports = function getGuitarist(object) {
  var number;
  var propArray = [];
  for (var prop in object) {
    propArray.push(object[prop]);
  }  
  number = Math.floor(Math.random() * propArray.length);
  var randomProp = propArray[number];
  return {word: randomProp};
};