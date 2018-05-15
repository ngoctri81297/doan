var database = firebase.database();
var ref = database.ref('status');
ref.on('value', function(snapshot) {
  updateStarCount(key, snapshot.val());
});
console.log(key)
