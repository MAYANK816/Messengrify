import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAhKBHyQR1_m8hxlgNeMPnQx-50rCjltY0",
    authDomain: "unichat-74128.firebaseapp.com",
    projectId: "unichat-74128",
    storageBucket: "unichat-74128.appspot.com",
    messagingSenderId: "911733671966",
    appId: "1:911733671966:web:65161006ca19c3bba1060f",
    measurementId: "G-RSXXEFFM10"
}).auth();