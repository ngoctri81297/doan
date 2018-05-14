var myUsers = new Firebase('https://glosh-1afd3.firebaseio.com/users');
var database = firebase.database();
$(document).ready(function(){
    $("#signupbtn").click(function(){
    var Fullname = $("#regis_fullname").val();
    var Username = $("#regis_username").val();
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
  });
});

