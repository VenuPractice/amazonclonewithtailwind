
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDhRZrrjj_Ga28fpbEmYXr39JLAOM8Eq4U",
  authDomain: "clone1-b1e93.firebaseapp.com",
  projectId: "clone1-b1e93",
  storageBucket: "clone1-b1e93.appspot.com",
  messagingSenderId: "1008563313331",
  appId: "1:1008563313331:web:fc79bf183b92e4ce332ec6",
  measurementId: "G-Z1J5ESK6T1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
