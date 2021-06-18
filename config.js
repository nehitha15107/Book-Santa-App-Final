import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAl9Jicdm1jrcu85lZuu-HOMra6_XWl7mw",
  authDomain: "finalbooksantaapp.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/project/undefined/firestore/data/",
  projectId: "finalbooksantaapp",
  storageBucket: "finalbooksantaapp.appspot.com",
  messagingSenderId: "525738715792",
  appId: "1:525738715792:web:eeed62fdca675e54d3c615"
};

if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore()