$(document).ready(function(){
  $("statusbtn").click(function(){
    var Textarea = $("#status").val()
    if (!Textarea.checkValidity()) {
        alert(Textarea.validationMessage);
    } else {
        alert("Input OK");
    }
  })
})
