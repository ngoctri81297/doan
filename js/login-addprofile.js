var myUsers = new Firebase('https://glosh-1afd3.firebaseio.com/users');
var database = firebase.database();
var username_global="";
$(document).ready(function(){
    $("#signupbtn").click(function(){
    var Fullname = $("#regis_fullname").val();
    var Username = $("#regis_username").val();
    var Regis_email = $("#regis_email").val();
    var Phone_number = $("#phone_number").val();
    var Gender = $('input[name=optradio]:checked').val()
    var Date = $("#date").val();
  //   myUsers.on('value', gotData);
  //   function gotData(data){
  //   var user = data.val();
  //   var keys = Object.keys(user);
  //   for(var i=0;i<keys.length;i++){
  //     var k = keys[i];
  //     var username= user[k].Username;
  //     username_global= username
  //     if(Username!=username_global){
    if(Fullname=="" || Regis_email=="" || Phone_number=="" || Gender=="" || Date==""){
      alert("Please complete the form")
    }else{
        myUsers.push({
          Fullname:Fullname,
          Username:Username,
          Email:Regis_email,
          Phone:Phone_number,
          Gender:Gender,
          Birth: Date
        });
      }
  //     }else{
  //       alert('Username exist')
  //     }
  //   }

  // }

  });
});

