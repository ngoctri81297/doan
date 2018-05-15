var query = firebase.database().ref("status").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = Snapshot.key;
      var childData = childSnapshot.val();
      var childKey = snapshot.child("From").key;
      console.log(childKey)
  });
});
