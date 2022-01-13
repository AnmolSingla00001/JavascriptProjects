import React from "react";
import logo from "./logo.svg";
import "./App.css";

import CardParticipant from "./components/comp-card-participant";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <CardParticipant name="Ankit Jain" role="Meeting Host" imgSize="35px" />
      <CardParticipant
        name="Anmol Singla"
        role="Meeting Participant"
        imgSize="35px"
      />
      <CardParticipant
        name="Nikhil Nalande"
        role="Meeting Participant"
        imgSize="35px"
      />
      <CardParticipant
        name="Sumeet Chandel"
        role="Meeting Participant"
        imgSize="35px"
      />
      <CardParticipant
        name="Ankit Satoniya"
        role="Meeting Participant"
        imgSize="35px"
      />
    </>
  );
}

export default App;
