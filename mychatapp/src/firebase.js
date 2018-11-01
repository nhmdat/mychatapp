import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyB46D4kmKCbj33u_9xUgb1V_TvLLWX8q18",
    authDomain: "mychat-11c26.firebaseapp.com",
    databaseURL: "https://mychat-11c26.firebaseio.com",
    projectId: "mychat-11c26",
    storageBucket: "mychat-11c26.appspot.com",
    messagingSenderId: "107704014190"
  };

const firebaseApp = firebase.initializeApp(config);
const base = firebase.database();

export { firebaseApp };
export default base;