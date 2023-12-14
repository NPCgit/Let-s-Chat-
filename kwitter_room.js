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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
