// Initialize Firebase
const config = {
    apiKey: "AIzaSyCk95J4vJT0FVMtzuAgOfQ1VRJXGmz790Y",
    authDomain: "macros-815f2.firebaseapp.com",
    databaseURL: "https://macros-815f2.firebaseio.com",
    projectId: "macros-815f2",
    storageBucket: "macros-815f2.appspot.com",
    messagingSenderId: "282153801274"
};
firebase.initializeApp(config);

console.log("*********  Loading  DB **********");

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const macrosCollection = db.collection("Macros");
const intakeCollection = db.collection("Intake");
let currentUser;
