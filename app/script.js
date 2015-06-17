'use strict';

$(function() {

function capitalize(string) {
   return string.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

  $('#pick-string').click( function() {
    $.get("https://localhost:3000/adjective", function(response) {
      var adjResponse = response.word;
      $('#adjective').text(adjResponse);
    })

    $.get("https://localhost:3000/verb", function(response) {
      var verbResponse = response.word;
      $('#verb').text(verbResponse);
    })

    $.get("https://localhost:3000/noun", function(response) {
      var nounResponse = response.word;
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
        $('#noun-pic').attr("src", "images/notes.png");
      }
    })
  })

    $("#submitWords").on("submit", function(e) {
        e.preventDefault();
        
        var adjective = capitalize($("[name=adjective]").val());
        var adjPost;
        var verb = capitalize($("[name=verb]").val());
        var verbPost;
        var noun = capitalize($("[name=noun]").val());
        var nounPost;

        if (adjective) {
          adjPost = {word: adjective};
          $.post("adjective", adjPost, function(response) {
            var adjectiveRes = response.msg;
            $("#adjRes").text(adjectiveRes);
          })
        }
        if (verb) {
          verbPost = {word: verb};
          $.post("verb", verbPost, function(response) {
            var verbRes = response.msg;
            $("#verbRes").text(verbRes);
          })
        }
        if (noun) {
          nounPost = {word: noun};
          $.post("noun", nounPost, function(response) {
            var nounRes = response.msg;
            $("#nounRes").text(nounRes);
          })
        }
        $("[name=adjective]").val("");
        $("[name=verb]").val("");
        $("[name=noun]").val("");
    });
});
