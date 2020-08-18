import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxu8ctzNqxoqRkv_TzaxUKkNmGwuebyoA",
  authDomain: "black-aa4d3.firebaseapp.com",
  databaseURL: "https://black-aa4d3.firebaseio.com",
  projectId: "black-aa4d3",
  storageBucket: "black-aa4d3.appspot.com",
  messagingSenderId: "1004424871495",
  appId: "1:1004424871495:web:bb8ed4c0403b82d63f3b62",
  measurementId: "G-9NJ7BXDCXM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider}
export default db;