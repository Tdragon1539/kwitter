
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyArHFmKANKuXg9EOkSbLnCZlrVIlicSwl8",
  authDomain: "kwitter-f8833.firebaseapp.com",
  databaseURL: "https://kwitter-f8833-default-rtdb.firebaseio.com",
  projectId: "kwitter-f8833",
  storageBucket: "kwitter-f8833.appspot.com",
  messagingSenderId: "147178747584",
  appId: "1:147178747584:web:9ed48bda3e9c68011a1f25"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Names- "+Room_names);
     row= "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name1= localStorage.getItem("user_name");
document.getElementById("welcome_tag").innerHTML= "Welcome "+user_name1+"!";


function addRoom(){
      room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
  });

      localStorage.setItem("room_name", room_name);
  
      window.location= "kwitter_page.html";
  }

  function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location= "index.html";

  }

  function redirect(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";
  }
