import React, { useState } from "react";
import "./login.css";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        <button type="submit" className="login__btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
