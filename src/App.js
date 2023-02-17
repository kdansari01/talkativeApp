import "./App.css";
import Chat from "./component/Chat";
import SignIn from "./component/SignIn";
// import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
