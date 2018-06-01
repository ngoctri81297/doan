var database = firebase.database();
var statusRef = database.ref('status');
var key_global_status="";
statusRef.on('value', getData);
    function getData(data){
      $('#allstatus-container').html("");
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
      str += '<tr><th id="Username">Username: '+username+'</th><th id="departday">Depart: '+date+'</th><th id="fromloca">From: '+from+'</th><th id="toloca">To: '+to+'</th></tr>'
      str += "<tr><td colspan=4><p class='text'>"+textstatus+"</p></td></tr>"
    str += "<tr><td colspan='4'><p id='all--sta'></p><button onclick='del(this)' date='"+date+"' class = 'inbbtn' id='"+ida+"'>DELETE</button></td></tr><br>"
      $("#allstatus-order").html(str)
    }
  }
  function del(all){
    $('#all--sta').text(all.id)
    statusRef.orderByChild('Id').equalTo($('#all--sta').text()).on("value", function(snapshot) {
      snapshot.forEach(function(child) {
         var key = child.key;
         key_global_status = key;
         var delStatus = database.ref('status/'+key_global_status+'/');
         delStatus.remove().then(function(){
           alert("Remove succeeded");
         }).catch(function(error){
           alert(error.message)
         })
        })
    });
  }
