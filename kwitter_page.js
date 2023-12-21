//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDey98FHHREwYZosDmEOyyPWXBXwy4371A",
      authDomain: "kwitterbase-45c7b.firebaseapp.com",
      databaseURL: "https://kwitterbase-45c7b-default-rtdb.firebaseio.com",
      projectId: "kwitterbase-45c7b",
      storageBucket: "kwitterbase-45c7b.appspot.com",
      messagingSenderId: "813999130664",
      appId: "1:813999130664:web:1ef9340a5d87d154d14d1d",
      measurementId: "G-K9132019D9"
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });

      document.getElementById("msg").value = "";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

