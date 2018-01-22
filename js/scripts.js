$(document).ready(function()) {
  $(".form").submit(function(event) {
    event.preventDefault();
    var mostly1 = parseInt($("preference1").val());
    var mostly2 = parseInt($("preference2").val());
    var mostly3 = parseInt($("preference3").val());
    var mostly4 = parseInt($("preference4").val());
    var mostly5 = parseInt($("preference5").val());
    var result = mostly1 + mostly2 + mostly3 + mostly4 + mostly5

   if (result <= 20 && >= 16) {
     $(".java").show();
   } else if (result === 15) {
     $(".csharp").show();
   } else if (result <= 15 && >= 11) {
     $(".ruby").show();
   } else {
     $(".php").show();

     }
    });
  });
