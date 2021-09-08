import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyColfO-okk7HGAImFfiTQz1lwtA7Dd8_6E",
  authDomain: "e-ride8-7-6-5-4-3-2.firebaseapp.com",
  projectId: "e-ride8-7-6-5-4-3-2",
  storageBucket: "e-ride8-7-6-5-4-3-2.appspot.com",
  messagingSenderId: "974561437378",
  appId: "1:974561437378:web:3cbb67d9e99fdbc7dfbd5b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
