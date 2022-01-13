import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homePage";
import Nav from "./components/nav";
import Shortlisted from "./components/shortlisted";
import Rejected from "./components/rejected";
import UserDetails from "./components/userDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shortlisted" element={<Shortlisted />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/userdetails/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
