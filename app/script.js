'use strict';

$(function() {
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
  })

    $("#submitWords").on("submit", function(e) {
        e.preventDefault();
        
        var adjective = $("[name=adjective]").val();
        var adjPost;
        var verb = $("[name=verb]").val();
        var verbPost;
        var noun = $("[name=noun]").val();
        var nounPost;

        if (adjective) {
          adjPost = {word: adjective};
          $.post("adjective", adjPost, function(response) {
            console.log('response');
            var adjectiveRes = response.msg;
            $("#adjRes").text(adjectiveRes);
          })
        }
        if (verb) {
          verbPost = {word: verb};
          $.post("verb", verbPost, function(response) {
            console.log('response');
            var verbRes = response.msg;
            $("#verbRes").text(verbRes);
          })
        }
        if (noun) {
          nounPost = {word: noun};
          $.post("noun", nounPost, function(response) {
            console.log('response');
            var nounRes = response.msg;
            $("#nounRes").text(nounRes);
          })
        }
    });
});
