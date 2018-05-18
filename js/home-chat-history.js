var database = firebase.database();
var messRef = firebase.database().ref("messages");



messRef.on("value", function(data) {
 var ss = Object.values(data.val());
 for (i in ss){
   //console.log(ss[i]['myName'] +" and "+$('#username-p').text())
  if( ss[i]['myName'] == $('#username-p').text()){

   // console.log(ss[i]['myName'])

  }else{
//    console.log("false");

  }
 }
 });
