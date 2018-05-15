var myStatus = new Firebase('https://glosh-1afd3.firebaseio.com/status');
var databasestatus = firebase.database();
$(document).ready(function(){
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
    });
    location.reload("home.html")
    }
    else{
      alert("Please add a Status Information")
    }
  });
});

