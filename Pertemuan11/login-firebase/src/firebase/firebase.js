import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAevKfXcsrZDTjoaIH_yQccaRCCo_paoK4",
	authDomain: "praktikum-b7222.firebaseapp.com",
	projectId: "praktikum-b7222",
	storageBucket: "praktikum-b7222.appspot.com",
	messagingSenderId: "150789753257",
	appId: "1:150789753257:web:fe8d1a17c6a886d8f49cb8",
	measurementId: "G-4SDVD5C9YE"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;