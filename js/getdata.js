var database = firebase.database();
var ref = database.ref('users');
ref.on('value', gotData)
function gotData(data){
  var users= data.val();
  var keys= Object.keys(users);
  for(var i = 0;i <keys.length;i++){
    var k= keys[i];
    $("label").append(users[k].Birth);
  }

}
