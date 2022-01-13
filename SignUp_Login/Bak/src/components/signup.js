import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "./signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log("submit clicked");
    e.preventDefault();

    dispatch(
      login({
        name: name,
        userName: userName,
        email: email,
        mobile: mobile,
        password: password,
        cpassword: cpassword,
        loggedIn: false,
      })
    );
  };

  const handleLogin = (e) => {
    console.log("login clicked");
  };

  return (
    <div className="signup">
      <button className="login__btn" onClick={(e) => handleLogin(e)}>
        Sign In
      </button>
      <h1 style={{ color: "white" }}>Enter User Registration Details</h1>
      <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="Not found"
          width="130"
          height="130"
          className="user__img"
        ></img>
        <input
          type="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="name"
          placeholder="Enter a username for your account"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Please enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Please confirm your password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        ></input>
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
