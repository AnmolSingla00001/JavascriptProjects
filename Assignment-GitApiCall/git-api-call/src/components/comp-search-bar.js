import React from "react";
import { useState } from "react";

const FuncSearch = (props) => {
  const [searchTxt, searchTxtSetter] = useState("");
  console.log("Re-render: ", searchTxt);

  const _searchBtn = () => {
    console.log("Testing Button");
    // console.log(searchTxt);

    fetch(`https://api.github.com/users/${searchTxt}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Prints result from `response.json()` in getRequest
        props.ApiResult(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div
      className="search-container"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "50px",
        width: "300px",
        backgroundColor: "lightgrey",
        // "border-radius": "5px",
        // "justify-content": "space-between",
        // margin: "5px 0",
      }}
    >
      <input
        type="text"
        id="inp_search"
        value={searchTxt}
        placeholder="Enter the GIT Username."
        onChange={(e) => {
          searchTxtSetter(e.target.value);
        }}
      ></input>
      <button onClick={_searchBtn}>Search</button>
    </div>
  );
};

export default FuncSearch;
