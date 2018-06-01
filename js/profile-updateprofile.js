var database = firebase.database();
var userRef = database.ref('users');
var statusRef = database.ref('status');
var email_global = "";
var key_global = "";
var UserName_global="";
var key_global_status="";
//start
    $("#update-btn").click(function(){
      var fullname_update = $("#newfullname").val();
      var birth_update = $("#birth-update").val();
      var gender_update = $('input[name=update-optradio]:checked').val();
      var phone_update = $("#update-phone_number").val();
      userRef.on('value', takeData);
      function takeData(data){
        var ss = Object.values( data.val() )
      var email_term = ""
       firebase.auth().onAuthStateChanged(function(user) {
        email_term = user.email
        email_global= email_term;

        });
      };
        if(fullname_update !="" && birth_update !="" && gender_update != "" && phone_update != ""){
      var ref = database.ref('users');
      ref.orderByChild('Email').equalTo(email_global).on("value", function(snapshot) {
        snapshot.forEach (function(child) {
           var key = child.key;
           key_global = key;
           var updateU = database.ref('users/'+key_global+'/');
           updateU.update({Fullname:fullname_update,Birth:birth_update,Gender:gender_update,Phone:phone_update})
           location.replace('profile.html')
          })
      });
        }else{
          alert("Please complete the update form")
        }
    });
    userRef.on('value', gotData);
function gotData(data){
  var users = Object.values( data.val() )
var email_term = ""
 firebase.auth().onAuthStateChanged(function(user) {
  email_term = user.email
  for (i in users) {
      if (users[i]['Email'] == email_term ){
        Username = users[i]['Username']
        UserName_global = Username
      }
    }

  });
}
  function del(em){
    $('#user--sta').text(em.id)
    var ref = database.ref('status');
    ref.orderByChild('Id').equalTo($('#user--sta').text()).on("value", function(snapshot) {
      snapshot.forEach (function(child) {
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
