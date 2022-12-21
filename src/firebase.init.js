import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD2j3TToUXzaIWKvBdbLhuK3_YQyNEF0Y0",
  authDomain: "nikahul-muslim.firebaseapp.com",
  projectId: "nikahul-muslim",
  storageBucket: "nikahul-muslim.appspot.com",
  messagingSenderId: "697497544866",
  appId: "1:697497544866:web:2065090218466f69228ffb",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
