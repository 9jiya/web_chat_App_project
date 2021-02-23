var firebaseConfig = {
    apiKey: "AIzaSyBhtmWiBAoub7R4S3tkTTGgX7JQ0sYGQTg",
    authDomain: "qwitter-c8167.firebaseapp.com",
    databaseURL: "https://qwitter-c8167-default-rtdb.firebaseio.com",
    projectId: "qwitter-c8167",
    storageBucket: "qwitter-c8167.appspot.com",
    messagingSenderId: "775260351915",
    appId: "1:775260351915:web:012367d26dcc97ba10b6ee",
    measurementId: "G-ZBM5TNZYZ1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addroom(){
      a = document.getElementById("room_name").value;
      console.log(a);
      firebase.database().ref("/").child(a).set({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room",a);
      window.location="index3.html";
}
function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) 
  {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) 
        {
   childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("RoomName-",Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='navigate_index(this.id)' >Room name is - "+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  });
});
}
getData();
function navigate_index(y){
  console.log(y);
  localStorage.setItem("room",y);
  window.location="index3.html";
}
function profile(){
 window.location="index4.html";
}