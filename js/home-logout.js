var auth = firebase.auth();
$(document).ready(function(){
    $("#logoutbtn").click(function(){
    auth.signOut().then(function(user){
      location.replace('index.html');
      alert("See you again");
    }).catch(function(error) {
      // Handle Errors here.
    });
  });
});
