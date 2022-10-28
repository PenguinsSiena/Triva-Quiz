
//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDU4aPoq8GhLJ9qcX6mvgU_qUhgzGQOWUU",
    authDomain: "kwitter-6de15.firebaseapp.com",
    databaseURL: "https://kwitter-6de15-default-rtdb.firebaseio.com",
    projectId: "kwitter-6de15",
    storageBucket: "kwitter-6de15.appspot.com",
    messagingSenderId: "594820265605",
    appId: "1:594820265605:web:8ce9f7bcf14345d99e1bec",
    measurementId: "G-4146TWZJKW"
  };
  
  likes = localStorage.getItem("likes");

document.getElementById("likes").innerHTML = likes;
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function geography()
{
    window.location = "geo.html";
}
function musicMovies()
{
    window.location = "mm.html";
}function nature()
{
    window.location = "nat.html";
}function sports()
{
    window.location = "spo.html";
}

