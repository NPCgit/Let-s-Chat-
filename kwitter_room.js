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
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot)
       {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room name" + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+ Room_names + "</div> <hr>";

            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


