import React from "react";

const CandCard = (props) => {
  console.log("Testing Child");

  return (
    <div
      onClick={() => {
        props.cardClick(props.cardObj);
      }}
      className="cand-card"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "200px",
        width: "300px",
        backgroundColor: "lightgrey",
        borderRadius: "5px",
        justifyContent: "space-evenly",
        margin: "5px 0",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <img
        style={{ borderRadius: "50%" }}
        src={props.cardObj.Image}
        alt=""
        width={"100px"}
        height={"100px"}
      />
      <h4 id={"nameId"}>{props.cardObj.name}</h4>
      <h5 id={"idId"}>{props.cardObj.id}</h5>
    </div>
  );
};

export default CandCard;
