
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey, 
  authDomain: process.env.REACT_APP_authDomain, 
  projectId: process.env.REACT_APP_projectId, 
  storageBucket: process.env.REACT_APP_storageBucket, 
  messagingSenderId: process.env.REACT_APP_messagingSenderId, 
  appId: process.env.REACT_APP_appId 
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCjz11jL4a8YtqL_VY5TUmKWH-SI8j28Nc",
//   authDomain: "doctors-portal-bb897.firebaseapp.com",
//   projectId: "doctors-portal-bb897",
//   storageBucket: "doctors-portal-bb897.appspot.com",
//   messagingSenderId: "141676217514",
//   appId: "1:141676217514:web:a694b102180b311ee93cd3"
// };

const app = initializeApp(firebaseConfig);
export default app;