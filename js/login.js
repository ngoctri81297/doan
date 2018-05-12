$(document).ready(function(){
    $("#loginbtn").click(function(){
    var user_name = $("#user_name").val();
    var user_password = $("#user_password").val();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var user = firebase.auth().currentUser;
        // User is signed in.
        if (user != null){
          location.replace("home.html");
        }
      } else {
        // No user is signed in.
      }
    });
    firebase.auth().signInWithEmailAndPassword(user_name, user_password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
  });
});
