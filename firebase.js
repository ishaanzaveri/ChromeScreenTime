
var firebaseConfig = {
    apiKey: "AIzaSyAGBuz8Bmrk0Y3twJ4bcD_OU5q3LvnP2c0",
    authDomain: "chromeext-2f908.firebaseapp.com",
    databaseURL: "https://chromeext-2f908.firebaseio.com",
    projectId: "chromeext-2f908",
    storageBucket: "chromeext-2f908.appspot.com",
    messagingSenderId: "278149775455",
    appId: "1:278149775455:web:10dca09e774d2c63c59bea",
    measurementId: "G-8NBGCJHETK"
  };

  firebase.initializeApp(firebaseConfig);

  console.log(firebase);

  var db = firebase.firesore();

  db.collection("users").doc("Brian").set({
      website: ["youtube.com", "netflix.com", "google.com"]
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  /* chrome.runtime.onMessage.addListener((msg, sender, resp) => {
      if(msg.command == "fetch"){
          var docRef = db.collection("users")
      }
      return true;
  })
  */