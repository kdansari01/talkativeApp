import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseApp = {
  apiKey: "AIzaSyBYOwZR6rMKiX_KQm64ETdtTPoLlCmXobo",
  authDomain: "chatapp-45f87.firebaseapp.com",
  databaseURL: "https://chatapp-45f87-default-rtdb.firebaseio.com",
  projectId: "chatapp-45f87",
  storageBucket: "chatapp-45f87.appspot.com",
  messagingSenderId: "805938315795",
  appId: "1:805938315795:web:c24a1adebaa3a6019435e6",
  measurementId: "G-H8KEWBDJ2K"
};
const app = initializeApp(firebaseApp);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
