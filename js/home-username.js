var myStatus = new Firebase('https://glosh-1afd3.firebaseio.com/status');
var databasestatus = firebase.database();
var database = firebase.database();
var userRef = database.ref('users');
var messRef = firebase.database().ref("messages");


var UserName_global = ""
//start
$(document).ready(function(){
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
        $("#username-profile").append(UserName_global);
        $("#username-p").text(UserName_global);

      }
    }
    messRef.on('value', getHistory)
    function getHistory(data){
      var frNameArr = []
      var ss = Object.values(data.val());
      for (i in ss){
        //console.log(ss[i]['myName'] +" and "+$('#username-p').text())
       if( ss[i]['myName'] == UserName_global ){
         if(frNameArr.indexOf(ss[i]['frName']) < 0 ){
          frNameArr.push(ss[i]['frName'])
        }
         //console.log(ss[i]['frName'])

       }else{
        if( ss[i]['frName'] == UserName_global ){
          if(frNameArr.indexOf(ss[i]['myName']) < 0 ){
           frNameArr.push(ss[i]['myName'])
         }
          //console.log(ss[i]['frName'])

        }
       }

      }
      var historyNameStr = ""
      for(i in frNameArr){
       historyNameStr += "<div class= 'historyName' onclick='showMess(this)' id='"+frNameArr[i]+"'>"+frNameArr[i]+"</div>"
      }

      $(".builder-container").html(historyNameStr)

    }
  })
}





})
function showMess(me){
  $('#chat-content').html("");
  // alert(me.id)
   $('#fr-user').text(me.id)

   messRef.on("value", function(data) {
    var ss = Object.values( data.val() )
    for(i in ss){
      // console.log(ss[i]['myName']);
      if(ss[i]['frName'] == $('#fr-user').text() && ss[i]['myName'] == $('#username-p').text() ){
        var messStr = "<div class = 'myMess'>Me: "+ss[i]['text']+"</div><div class='blockMess'></div>"

        $("#chat-content").append(messStr)
        $('#chat-content').animate({
          scrollTop: $('#chat-content')[0].scrollHeight
  }, 0);
      }else{
        if(ss[i]['myName'] == $('#fr-user').text() && ss[i]['frName'] == $('#username-p').text() )
        {
          var messStr = "<div class = 'frMess'>"+ss[i]['myName']+": "+ss[i]['text']+"</div><div class='blockMess'></div>"
        $("#chat-content").append(messStr)
        $('#chat-content').animate({
          scrollTop: $('#chat-content')[0].scrollHeight
  }, 0);
        }
      }
    }// foreach ss
   });

}
