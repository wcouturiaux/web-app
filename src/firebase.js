import firebase from 'firebase/app';
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDhMPNp_v1vl1APcbIuwhEYVwm0DJSckZg",
    authDomain: "by8-318322.firebaseapp.com",
    projectId: "by8-318322",
    storageBucket: "by8-318322.appspot.com",
    messagingSenderId: "886066433112",
    appId: "1:886066433112:web:7fe497647abaa5fc4a4e2d"
});

export const auth = app.auth();
export default app;