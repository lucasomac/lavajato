import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZF1FgJ6u5VylWQIjKOS0eA9Hf2Hws1bI",
    authDomain: "lavajato-e161d.firebaseapp.com",
    projectId: "lavajato-e161d",
    storageBucket: "lavajato-e161d.appspot.com",
    messagingSenderId: "668525057868",
    appId: "1:668525057868:web:55f0023e3b81a680c2a1e9"
};

// Inicializa o Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export {
    firebase as default,
    db,
};
