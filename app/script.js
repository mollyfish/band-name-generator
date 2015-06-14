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
    $.get("http://localhost:3000/verb", function(response) {
      var verbResponse = response.word;
      $('#verb').text(verbResponse);
    })
    $.get("http://localhost:3000/noun", function(response) {
      var nounResponse = response.word;
      console.log(nounResponse);
      $('#noun').text(nounResponse);
      if (nounResponse == "Chairs") {
        $('#noun-pic').attr("src", "images/chair.png");
      } else if (nounResponse == "Typewriters") {
        $('#noun-pic').attr("src", "images/typewriter.png");
      } else if (nounResponse == "Tigers") {
        $('#noun-pic').attr("src", "images/tiger.png");
      } else if (nounResponse == "Walnuts") {
        $('#noun-pic').attr("src", "images/walnuts.png");
      } else if (nounResponse == "Canoes") {
        $('#noun-pic').attr("src", "images/canoes.png");
      } else {
        $('#noun-pic').attr("src", "error");
      }


    })
    // $.get("http://localhost:3000/picture", function(response) {
    //   var picResponse = response.picture;
    //   // console.log(picResponse);
      
    // })
  })
});
