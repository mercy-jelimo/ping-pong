//business interface
function pingPongs(userInput) {
  var results = [];
  for (var i = 1; i <= userInput; i++) {
    if ((i % 15) === 0)  {
      results.push("ping pong");
    }
    else if ((i % 5) === 0) {
      results.push("pong");
    }
    else if ((i % 3) === 0) {
      results.push("ping");
    }
    else {
      results.push(i);
    }
  }
  return results;
}



//user interface
$(document).ready(function() {
      $("form#pingPongForm").submit(function(event) {
          $("#userOutput").empty();
          var userInput = parseInt($("input#number").val());
          var results = pingPongs(userInput);
          results.forEach(function(output) {
              $("#userOutput").append( "<li>"+ output +"</li>");
                event.preventDefault();
              });
          });
      });
