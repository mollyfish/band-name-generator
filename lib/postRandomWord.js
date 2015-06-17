'use strict';

module.exports = function postRandomWord (word, object) {
//check if the word exists
  if (object.hasOwnProperty(word)) {
  //if the word does exist
  //send the user a message about that
    return {msg: 'Thanks for trying, but we have ' + word + ' already!'};
  } else {
  //if the word doesn't exist yet
  //add it as a property to the Word object and send thank you to the user
    object[word] = true;
    return {msg: 'Thanks for submitting your awesome word: ' + word + '!'};
  }  
};