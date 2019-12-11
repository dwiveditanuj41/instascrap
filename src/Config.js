import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1Dh0i-oup8DHhN213hlSp4WJa8OpUpCo",
  authDomain: "trafficpro-6d3ae.firebaseapp.com",
  databaseURL: "https://trafficpro-6d3ae.firebaseio.com",
  projectId: "trafficpro-6d3ae",
  storageBucket: "trafficpro-6d3ae.appspot.com",
  messagingSenderId: "250198439000",
  appId: "1:250198439000:web:22b8488554e7c78b9d462d",
  measurementId: "G-X9KN3GW8XX"
};

firebase.initializeApp(config);
const database = firebase.firestore();

export default firebase;
export const db = database;
