import React from "react";

const FuncSearch = (props) => {
  return (
    <div
      className="search-container"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "50px",
        width: "300px",
        backgroundColor: "lightgrey",
      }}
    >
      <input
        type="text"
        id="inp_search"
        placeholder="Enter the candidate name."
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default FuncSearch;
