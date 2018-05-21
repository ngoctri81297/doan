var database = firebase.database();
var statusRef = database.ref('status');
var email_global = "";
var key_global = "";
var UserName_global="";
var key_global_status="";
//start
    $("#searchbtn").click(function(){
      var search = $('#search').val();
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
        if(search==username){
          str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
          str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
          str += "<tr><td colspan='4'><button onclick='show(this)' username='"+username+"' class = 'inbbtn' id='"+username+"'>INBOX</button></td></tr><br>"
          $("#info-order").html(str)
        }
          if(search==date){
            str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
            str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
            str += "<tr><td colspan='4'><button onclick='show(this)' username='"+username+"' class = 'inbbtn' id='"+username+"'>INBOX</button></td></tr><br>"
            $("#info-order").html(str)
          }
          if(search==from || search==to){
            str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
            str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
            str += "<tr><td colspan='4'><button onclick='show(this)' username='"+username+"' class = 'inbbtn' id='"+username+"'>INBOX</button></td></tr><br>"
            $("#info-order").html(str)
          }
      }
    }
        })
        $('#search').keypress(function(e) {
          if(e.which == 13) {
            var search = $('#search').val();
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
              if(search==username){
                str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
                str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
                str += "<tr><td colspan='4'><button onclick='show(this)' username='"+username+"' class = 'inbbtn' id='"+username+"'>INBOX</button></td></tr><br>"
                $("#info-order").html(str)
              }
                if(search==date){
                  str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
                  str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
                  str += "<tr><td colspan='4'><button onclick='show(this)' username='"+username+"' class = 'inbbtn' id='"+username+"'>INBOX</button></td></tr><br>"
                  $("#info-order").html(str)
                }
                if(search==from || search==to){
                  str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
                  str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
                  str += "<tr><td colspan='4'><button onclick='show(this)' username='"+username+"' class = 'inbbtn' id='"+username+"'>INBOX</button></td></tr><br>"
                  $("#info-order").html(str)
                }
            }
          }
          }
      });

