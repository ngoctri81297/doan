var myFirebase = new Firebase('https://glosh-1afd3.firebaseio.com/messages')
$(document).ready(function() {

userRef.on('value', takeData);
function takeData(data){
  var ss = Object.values( data.val() )
var email_term = ""
 firebase.auth().onAuthStateChanged(function(user) {
  email_term = user.email
  for (i in ss) {
      if (ss[i]['Email'] == email_term ){
        Username = ss[i]['Username']
      //  console.log("====>"+Username)
        UserName_global = Username
      }
    }
  })
}

$('#send-btn').on('click', function (e) {
  e.preventDefault();
  var text = $('#chat-inbox').val();
  var myName = $('#username-p').text()
  var frName = $('#fr-user').text()
  if (text != "" && myName != "" && frName != "" ) {
      myFirebase.push({myName: myName,frName: frName, text: text});
      $('#chat-inbox').val('');
      $('#chat-content').html("");
  }else
  {
    alert("Loi")
  }
});


  });
