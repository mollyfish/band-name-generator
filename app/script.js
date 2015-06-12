'use strict';

$(function() {

  

  // var selected;
  // var str0 = [1,2,3];
  // var str1 = [4,5,6];
  // var str2 = [7,8,9];
  // var str3 = ["a","b","c"];
  // var arrayOfStrings = [str0, str1, str2, str3];

  // function pickAString() {
  //   selected = Math.floor(Math.random() * 4);
  //   console.log(arrayOfStrings[selected]);
  //   return arrayOfStrings[selected];
  // }

  // function renderString() {
  //   $('#display-string').text('');
  //   $('#display-string').append(arrayOfStrings[selected]);
  // }

  $('#pick-string').click( function() {
    $.get("http://localhost:3000/adjective", function(response) {
      var adjResponse = response.word;
      $('#adjective').text(adjResponse);
    })
  })
});
