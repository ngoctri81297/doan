var myUsers = new Firebase('https://glosh-1afd3.firebaseio.com/users');
var database = firebase.database();
var username_global = "";
$(document).ready(function(){
    $("#signupbtn").click(function(){
    var Fullname = $("#regis_fullname").val();
    var Username = $("#regis_username").val();
    var Regis_email = $("#regis_email").val();
    var Phone_number = $("#phone_number").val();
    var Gender = $('input[name=optradio]:checked').val()
    var Date = $("#date").val();
    if(Username=="" || Fullname=="" || Regis_email=="" || Phone_number=="" || Gender=="" || Date==""){
      alert("Please complete the form")
    }else{
      checkexist(Username,Fullname,Regis_email,Phone_number,Gender,Date)
    }
  });
  function checkexist(Username,Fullname,Regis_email,Phone_number,Gender,Date){

    myUsers.orderByChild('Username').equalTo(Username).once("value", function(snapshot){
      if(snapshot.exists()){
        alert("Username exist");
      }else{
        createuser();
        myUsers.push({
          Fullname:Fullname,
          Username:Username,
          Email:Regis_email,
          Phone:Phone_number,
          Gender:Gender,
          Birth: Date
        });
      }
    })
  }

  function createuser(){
    var auth = firebase.auth();
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
  }
});


