var database = firebase.database();
var userRef = database.ref('users');
var statusRef = database.ref('status');
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

      }
    }
    userRef.on('value', gotData);
    function gotData(data){
      $('#show-profile').html("");
    var user = data.val();
    var keys = Object.keys(user);
    var str = ""
    for(var i=0;i<keys.length;i++){
      var k = keys[i];
      var username = user[k].Username;
      var email = user[k].Email;
      var fullname = user[k].Fullname;
      var birth   = user[k].Birth;
      var gender = user[k].Gender;
      var phone = user[k].Phone;
      if(email==email_term){
          str += "<tr><th><p id='usersta'></p>Username: "+username+"</th></tr>"
          str += "<tr><th><p id='profile-email'>"+email+"</p>Email: "+email+"</th></tr>"
          str += "<tr><th>FullName: "+fullname+"</th></tr>"
          str += "<tr><th>Birth: "+birth+"</th></tr>"
          str += "<tr><th>Gender: "+gender+"</th></tr>"
          str += "<tr><th>Phone: "+phone+"</th></tr>"
      }
      $("#profile-order").html(str)


      // test

      // str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
      // str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
      // str += "<tr><td colspan='4'><button onclick='show(this)' username='"+username+"' class = 'inbbtn' id='"+username+"'>INBOX</button></td></tr><br>"
      // // end test
      // // end ..
    }

  }
  statusRef.on('value', getData);
    function getData(data){
      $('#mystatus-container').html("");
    var status = data.val();
    var keys = Object.keys(status);
    var str = ""
    for(var i=keys.length - 1;i>=0;i--){
      var k = keys[i];
      var username= status[k].UserName;
      var date = status[k].DepartDay;
      var from = status[k].From;
      var to   = status[k].To;
      var textstatus = status[k].Status;
      var ida= status[k].Id;
      if(username==UserName_global){
      str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
      str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
    str += "<tr><td colspan='4'><p id='user--sta'></p><button onclick='del(this)' date='"+date+"' class = 'inbbtn' id='"+ida+"'>DELETE</button></td></tr><br>"
      }
      $("#mystatus-order").html(str)
    }

  }
  })
}
 })
