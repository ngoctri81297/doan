var database = firebase.database();
var statusRef = database.ref('status');
var userRef = database.ref('users');
userRef.on('value', takeData);
statusRef.on('value', gotData);
    function gotData(data){
    var status = data.val();
    var keys = Object.keys(status);
    var str = ""
    for(var i=0;i<keys.length;i++){
      var k = keys[i];
      var username= status[k].UserName;
      var date = status[k].DepartDay;
      var from = status[k].From;
      var to   = status[k].To;
      var textstatus = status[k].Status;
      // test

      str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
      str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
      str += "<tr><td colspan='4'><button onclick='showchat("+username+")' id='inbbtn'>INBOX</button></td></tr><br>"
      // end test
      // end ..
    }
    $("#info-order").append(str)
  }
