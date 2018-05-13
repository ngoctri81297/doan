var myUsers = new Firebase('https://glosh-1afd3.firebaseio.com/users');
var database = firebase.database();
var ref = database.ref('users');
ref.on('value', gotData)
function gotData(data){
  console.log(data.val());
}
$(document).ready(function(){
    $("#signupbtn").click(function(){
    var Fullname = $("#regis_fullname").val();
    var Username = $("#regis_username").val();
    var Regis_pw = $("#regis_pw").val();
    var Regis_email = $("#regis_email").val();
    var Phone_number = $("#phone_number").val();
    var Gender = $('input[name=optradio]:checked').val()
    var Date = $("#date").val();
    myUsers.push({
      Fullname:Fullname,
      Username:Username,
      Email:Regis_email,
      Phone:Phone_number,
      Gender:Gender,
      Birth: Date
    });
  //   auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
  // // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // ...
// })
  });
});

