import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";
import { app } from "../firebase";
const SignIn = () => {
  const [userData, setUserData] = useState(null);
  // const [signIn, setSignIn] = useState(false);
  console.log("dta", userData);
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      setUserData(result._tokenResponse);
      console.log("Success:", result);
    } catch (error) {
      // Handle sign-in error
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {userData === null ? (
        <GoogleButton onClick={signInWithGoogle} />
      ) : (
        // {userData.DataTransfer.email}
        <p>{userData.email}</p>
      )}

      {/* <div>{DataTransfer.email}</div> */}
    </div>
  );
};

export default SignIn;
