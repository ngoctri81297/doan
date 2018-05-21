var auth = firebase.auth();
$(document).ready(function(){
    $("#loginbtn").click(function(){
      var email = $("#user_name").val();
      var password = $("#user_password").val();
      auth.signInWithEmailAndPassword(email, password).then(function(user){
        location.replace('home.html');
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
  });
});
$('#user_password').keypress(function(e) {
    if(e.which == 13) {
      var email = $("#user_name").val();
      var password = $("#user_password").val();
      auth.signInWithEmailAndPassword(email, password).then(function(user){
        location.replace('home.html');
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
  });
    }
});
});
