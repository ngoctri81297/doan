// var database = firebase.database();
// var userRef = database.ref('users');
// var statusRef = database.ref('status');
// var email_global = "";
// var email_database = "";
// //start
// $(document).ready(function(){
//     $("#update-btn").click(function(){
//       var username_update = $("#newusername").val();
//       var fullname_update = $("#newfullname").val();
//       var birth_update = $("#birth-update").val();
//       var gender_update = $('input[name=update-optradio]:checked').val();
//       var phone_update = $("#update-phone_number").val();
//       userRef.on('value', takeData);
//       function takeData(data){
//         var ss = Object.values( data.val() )
//       var email_term = ""
//        firebase.auth().onAuthStateChanged(function(user) {
//         email_term = user.email
//         email_global= email_term;
//         userRef.on('value', gotData);
//         function gotData(data){
//         var value = Object.values( data.val() )
//         for(i in value){
//           if(value[i]['Email']==email_global){
//             email = value[i]['Email'];

//             if(email=email_global){
//               database.ref().child(key).remove();

//               function writeUserData(username_update, fullname_update, birth_update, gender_update,phone_update) {
//                 firebase.database().ref('users/').set({
//                   Username: username_update,
//                   Fullname: fullname_update,
//                   Birth : birth_update,
//                   Gender : gender_update,
//                   Phone : phone_update,
//                 });
//               }
//             }


//           }

//         }


//       }
//         });
//       };
//       // else{
//       //   alert("Please complete the update form");
//       // }
//     });


//   });
