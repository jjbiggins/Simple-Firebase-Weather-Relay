// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require('firebase/database');

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs


// Add the Firebase services that you want to use




var nodeimu = require("nodeimu");
var IMU = new nodeimu.IMU( );
var sense = require("sense‐hat‐led");

 var firebaseConfig = {
    apiKey: "AIzaSyDYhaQy3BDr5ZZE9r62q_Q7T93ML55P7Vo",
    authDomain: "simple-firebase-data-relay.firebaseapp.com",
    databaseURL: "https://simple-firebase-data-relay.firebaseio.com",
    projectId: "simple-firebase-data-relay",
    storageBucket: "simple-firebase-data-relay.appspot.com",
    messagingSenderId: "338725197948",
    appId: "1:338725197948:web:3a04d699d552cc497d91f9"
  };

  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

