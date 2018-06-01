var myStatus = new Firebase('https://glosh-1afd3.firebaseio.com/status');
var databasestatus = firebase.database();
var database = firebase.database();
var userRef = database.ref('users');
var UserName_global = "";
var id_global="";
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
    $("#statusbtn").click(function(){
    var Datemove = $("#date-move").val();
    var From = $("#from").val();
    var To = $("#to").val();
    var Status = $("#status").val();
    statusRef.on('value', getData);
    function getData(data){
    var status = data.val();
    var keys = Object.keys(status);
    if(Status!="" && Datemove!="" && From!="" && To!=""){
      for (var i=0;i<keys.length;i++) {

      }
      myStatus.push({
      DepartDay:Datemove,
      From:From,
      To:To,
      Status:Status,
      UserName: UserName_global,
      Id: "s"+i,
    });
    location.reload("home.html")
    }
    else{
      alert("Please add a Status Information")
    }
  }
  });
});

