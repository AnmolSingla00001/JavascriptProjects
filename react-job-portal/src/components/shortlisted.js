import React, { useEffect, useState } from "react";
import CandCard from "./comp-candidate-card";

function Shortlisted() {
  const [selectList, setSelectList] = useState([]);
  useEffect(() => {
    setSelectList(JSON.parse(localStorage.getItem("selectList")));
    console.log(selectList);
  }, [selectList]);

  return (
    <div className="shortlisted">
      <h1>Shortlisted Tab</h1>

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
          {console.log("Ln-58", selectList)}
          {selectList.map((candidate) => {
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

export default Shortlisted;
