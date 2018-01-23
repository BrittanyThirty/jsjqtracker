$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
    var mostly1 = parseInt($("#preference1").val());
    var mostly2 = parseInt($("#preference2").val());
    var mostly3 = parseInt($("#preference3").val());
    var mostly4 = parseInt($("#preference4").val());
    var mostly5 = parseInt($("#preference5").val());
    var result = mostly1 + mostly2 + mostly3 + mostly4 + mostly5;

   if ((20 == result) && (16 <= result)) {
     $(".csharp, .ruby, .php").hide();
     $(".java").show();
   } else if ((15 >= result) && (13 <= result)) {
     $(".java, .ruby, .php").hide();
     $(".csharp").show();
   } else if ((12 >= result) && (10 <= result)) {
     $(".csharp, .java, .php").hide();
     $(".ruby").show();
   } else if ((9 >= result) && (5 <= result)) {
     $(".csharp, .ruby, .java").hide();
     $(".php").show();
   } else {
    alert ("Complete form inputs.");
   }
  });
});
