$(document).ready(function()) {
  $(".form").submit(function(event) {
    event.preventDefault();
    var mostly1 = parseInt($("#preference1").val());
    var mostly2 = parseInt($("#preference2").val());
    var mostly3 = parseInt($("#preference3").val());
    var mostly4 = parseInt($("#preference4").val());
    var mostly5 = parseInt($("#preference5").val());
    var result = mostly1 + mostly2 + mostly3 + mostly4 + mostly5

   if ((20 <= resulttotal) && (16 >= resulttotal)) {
     $(".csharp, .ruby, .php").hide();
     $(".java").show();
   } else if ((15 <= resulttotal) && (13 >= resulttotal)) {
     $(".java, .ruby, .php").hide();
     $(".csharp").show();
   } else if ((12 <= resulttotal) && (10 >= resulttotal)) {
     $(".csharp, .java, .php").hide();
     $(".ruby").show();
   } else if ((9 <= resulttotal) && (5 >= resulttotal)) {
     $(".csharp, .ruby, .java").hide();
     $(".php").show();
   } else {
    prompt("Complete form inputs.")
   }
  });
});
