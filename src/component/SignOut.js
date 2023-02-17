// import { Button } from "@mui/material/button";
import { getAuth } from "firebase/auth";

const SignOut = () => {
  const auth = getAuth();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        backgroundColor: "#FAFAFA",
        top: 0,
        borderBottom: "solid 1px lightgray",
        zIndex: "10"
      }}
    >
      <button
        style={{
          padding: "20px",
          fontSize: "15px",
          borderRadius: "0",
          fontWeight: "600"
        }}
        onClick={() =>
          auth
            .signOut()
            .then(() => {
              console.log("User signed out successfully.");
            })
            .catch((error) => {
              console.error("Error signing out:", error);
            })
        }
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
