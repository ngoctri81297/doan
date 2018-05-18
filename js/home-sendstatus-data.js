var myStatus = new Firebase('https://glosh-1afd3.firebaseio.com/status');
var databasestatus = firebase.database();
var database = firebase.database();
var userRef = database.ref('users');
var UserName_global = ""
//start
userRef.on('value', takeData);
function takeData(data){
  var ss = Object.values( data.val() )
var email_term = ""
 firebase.auth().onAuthStateChanged(function(user) {
  email_term = user.email
  for (i in ss) {
      if (ss[i]['Email'] == email_term ){
        Username = ss[i]['Username']
       // console.log("====>"+Username)
        UserName_global = Username
      }
    }
  })
}
//end
$(document).ready(function(){
  $(".inbbtn").css({"color":"red"})
    $("#statusbtn").click(function(){
    var Datemove = $("#date-move").val();
    var From = $("#from").val();
    var To = $("#to").val();
    var Status = $("#status").val();
    if(Status!="" && Datemove!="" && From!="" && To!=""){
      myStatus.push({
      DepartDay:Datemove,
      From:From,
      To:To,
      Status:Status,
      UserName: UserName_global
    });
    location.reload("home.html")
    }
    else{
      alert("Please add a Status Information")
    }
  });
  $(".inbbtn").click(function(){
    alert("sss")
  });

});

