$(document).ready(function()) {
  $(".form").submit(function(event) {
    event.preventDefault();
  }
    });
    var mostly1 = parseInt($("preference1").val());
    var mostly2 = 10
    var mostly3 = 15
    var mostly4 = 20
    

   if (result <= 16) {
     $('#value').show();
   } else if (result === 20) {
     $('#value').show();
   } else if (result === 15) {
     $('#value').show();
   } else if (result) === 10) {
     $('#value').show();
   } else if (result === 5) {
     $('#value').show();
   } else {
     $('#under-').show();
   }
