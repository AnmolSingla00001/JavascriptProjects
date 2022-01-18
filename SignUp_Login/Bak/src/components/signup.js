import React, { useEffect, useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router";
import { storage } from "../firebase";
import Popup from "./popup";

function Signup() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [image, setImage] = useState("");
  const [imageSrc, setImageSrc] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  );
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const imageSelectorRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    const validation = validateUserRegistration();
    if (validation) {
      // Throwing Validation
      setPopupMsg(validation);
      setPopupTrigger(true);
      console.log(validation);
      return;
    }
    registerNewUser();
  };

  const validateUserRegistration = (e) => {
    console.log("User Validation Started");
    // Validate empty values
    if (!name || !userName || !email || !mobile || !password || !cpassword) {
      return "All fields are mandatory.";
    }
    for (const user of userList) {
      // Validate UserName
      if (user.userName === userName) {
        setUsername("");
        return "This UserName is already registered.";
      }

      // Validate Email
      if (user.email === email) {
        setEmail("");
        return "This Email is already registered.";
      }

      // Validate Mobile
      if (user.mobile === mobile) {
        setMobile("");
        return "This Mobile Number is already registered.";
      }
      const regExp = /^[6-9]\d{9}$/gi;
      if (!regExp.test(mobile)) {
        setMobile("");
        return "Please enter a valid Mobile Number.";
      }

      // Validate Password
      const regularExpression =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (!regularExpression.test(password)) {
        setPassword("");
        setCpassword("");
        return "Password should have special characters and numbers along with capital letters.";
      }

      // Validate Confirm Password
      if (password !== cpassword) {
        setPassword("");
        setCpassword("");
        return "Passwords do not match.";
      }
    }
    return false;
  };

  const registerNewUser = (e) => {
    console.log("Registering New User");
    const user = {
      image: imageSrc,
      name: name,
      userName: userName,
      email: email,
      mobile: mobile,
      password: password,
    };
    // Appending user to the existing userList
    console.log(userList);
    setUserList([...userList, user]);
    console.log(userList);

    // Resetting Fields
    setName("");
    setUsername("");
    setEmail("");
    setMobile("");
    setPassword("");
    setCpassword("");
    setImage("");
    setImageSrc(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );

    // Calling Popup
    setPopupMsg("User Registered Successfully!");
    setPopupTrigger(true);
    // userList.push(user);
    // localStorage.setItem("registeredUsers", JSON.stringify(userList));
  };

  const handleLogin = (e) => {
    console.log("login clicked");
    navigate(`/login`);
  };

  const fileSelectedHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files[0]);

    if (e.target.files[0]) {
      // Resize the Image
      // Upload the File
      setImage(e.target.files[0]);
    }
  };

  // Uploading Image
  useEffect(() => {
    if (image) {
      console.log("Uploading Image ", image.name);
      const uploadTask = storage.ref(`userImages/${image.name}`).put(image);
      uploadTask.on(
        "state_change",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("userImages")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              setImageSrc(url);
            });
        }
      );
    }
  }, [image]);

  useEffect(() => {
    // Creating Local Storage Entries if not existing
    if (!localStorage.getItem("registeredUsers")) {
      // console.log("Creating Local Storage");
      localStorage.setItem("registeredUsers", "[]");
    }
    // Fetching Local Storage Entries if existing
    else {
      console.log("Local Storage Existing");
      setUserList(JSON.parse(localStorage.getItem("registeredUsers")));
      console.log(userList);
    }
  }, []);

  // Updating Local Storage if User List Changes (New User Registered)
  useEffect(() => {
    console.log("Local Storage Updating");
    localStorage.setItem("registeredUsers", JSON.stringify(userList));
    console.log(userList);
  }, [userList]);

  return (
    <div className="signup">
      <button className="login__btn" onClick={(e) => handleLogin(e)}>
        Sign In
      </button>
      <h1 style={{ color: "white" }}>Enter User Registration Details</h1>
      <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="file"
          style={{ display: "none" }}
          ref={imageSelectorRef}
          accept="image/png, image/gif, image/jpeg"
          onChange={fileSelectedHandler}
        ></input>
        <img
          src={imageSrc}
          alt="Not found"
          width="130"
          height="130"
          className="user__img"
          onClick={() => imageSelectorRef.current.click()}
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
        <div>
          <input
            type="password"
            placeholder="Please enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <span style={{ color: "Red" }}>Weak</span>
          <span style={{ color: "Green" }}>Strong</span>
        </div>
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
      <Popup trigger={popupTrigger} setTrigger={setPopupTrigger}>
        <h5 style={{ color: "black" }}>{popupMsg}</h5>
      </Popup>
    </div>
  );
}

export default Signup;
