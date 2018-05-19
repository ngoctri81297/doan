var database = firebase.database();
var statusRef = database.ref('status');
var userRef = database.ref('users');
var messRef = firebase.database().ref("messages");





statusRef.on('value', gotData);
    function gotData(data){
      $('#info-order').html("");
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
      // test

      str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
      str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
      str += "<tr><td colspan='4'><button onclick='show(this)' username='"+username+"' class = 'inbbtn' id='"+username+"'>INBOX</button></td></tr><br>"
      // end test
      // end ..
    }
    $("#info-order").append(str)
  }

  function show(me){
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




  //    myFirebase.on('child_added', function (snapshot){
  //     var message = snapshot.val();
  //     $("#chat-user").append(name);

  //     var html =
  //         '<tr>' +
  //             '<td><i class="glyphicon glyphicon-user"></i> ' + message.name + ': </td>' +
  //             '<td>' + message.text + '</td>' +
  //         '</tr>';
  //     $('#chat-content').append(html);
  //     // $('#scollDiv').animate({
  //     //     scrollTop: $('#scollDiv')[0].scrollHeight
  //     // }, 0);
  // });




