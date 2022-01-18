import React, { useEffect, useState } from "react";
import "./login.css";
import Popup from "./popup";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const loginHandler = () => {
    const user = userList.find((obj) => (obj.userName = userName));
    if (user === -1) {
      setUsername("");
      setPassword("");
      // Throwing Validation
      setPopupMsg("User doesn't exist.");
      setPopupTrigger(true);
      console.log("User doesn't exist.");
      return;
    }
    if (user.password !== password) {
      setPassword("");
      // Throwing Validation
      setPopupMsg("Incorrect Password");
      setPopupTrigger(true);
      console.log("Incorrect Password");
      return;
    }
    setPopupMsg("User Logged In Successfully");
    setPopupTrigger(true);
    console.log("User Logged In Successfully");
    return;
  };

  useEffect(() => {
    // Creating Local Storage entries if not existing
    if (!localStorage.getItem("registeredUsers")) {
      console.log("Creating Local Storage");
      localStorage.setItem("registeredUsers", "[]");
    }
    // Fetching Local Storage Entries if existing
    else {
      console.log("Local Storage Existing");
      setUserList(JSON.parse(localStorage.getItem("registeredUsers")));
      console.log(userList);
    }
  }, []);

  return (
    <div className="login">
      <h1>Enter User Registration Details</h1>
      <form className="login__form">
        <input
          type="name"
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className="signin__btn" onClick={loginHandler}>
          Login
        </button>
      </form>
      <Popup trigger={popupTrigger} setTrigger={setPopupTrigger}>
        <h5 style={{ color: "black" }}>{popupMsg}</h5>
      </Popup>
    </div>
  );
}

export default Login;
