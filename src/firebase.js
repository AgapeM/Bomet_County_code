import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBtKIZhmI3EHTdX7nnkKFiECRBUTB_XI8",
  authDomain: "projectprogress-a6837.firebaseapp.com",
  databaseURL: "https://projectprogress-a6837-default-rtdb.firebaseio.com",
  projectId: "projectprogress-a6837",
  storageBucket: "projectprogress-a6837.appspot.com",
  messagingSenderId: "235686380388",
  appId: "1:235686380388:web:0f75d1103ce1373e1e3071",
  measurementId: "G-D3CWELEFYJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
