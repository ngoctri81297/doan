firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
  var user = firebase.auth().currentUser;
  logUser(user); // Optional
}, function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

function logUser(user) {
  var ref = firebase.database().ref("users");
  var obj = {
      "user": user,

  };
  ref.push(obj); // or however you wish to update the node
}
