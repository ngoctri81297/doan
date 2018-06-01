var auth = firebase.auth();
$(document).ready(function(){
    $("#signupbtn").click(function(){
    var email = $("#regis_email").val();
    var password = $("#regis_pw").val();
    auth.createUserWithEmailAndPassword(email, password).then(function(user){
      var email = $("#regis_email").val();
      location.replace('index.html');
      alert("Successfully created user account with: "+ email);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage)
    });
  });

});
