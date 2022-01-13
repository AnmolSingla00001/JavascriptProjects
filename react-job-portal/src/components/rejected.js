import React, { useEffect, useState } from "react";
import CandCard from "./comp-candidate-card";

function Rejected() {
  const [rejectList, setrejectList] = useState([]);
  useEffect(() => {
    setrejectList(JSON.parse(localStorage.getItem("rejectList")));
    console.log(rejectList);
  }, [rejectList]);
  return (
    <div className="Rejected">
      <h1>Rejected Tab</h1>

      <div className="Homepage">
        <div
          className="listed-container"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "50px",
            width: "300px",
            backgroundColor: "lightgrey",
            // "border-radius": "5px",
            // "justify-content": "space-between",
            // margin: "5px 0",
          }}
        >
          {console.log("Ln-58", rejectList)}
          {rejectList.map((candidate) => {
            return (
              <CandCard
                cardObj={candidate}
                key={candidate.id}
                // cardClick={candOpen}
              ></CandCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rejected;
