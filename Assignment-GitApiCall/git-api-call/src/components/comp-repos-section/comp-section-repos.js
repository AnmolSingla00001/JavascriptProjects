import React from "react";
// import RepoCard from "./comp-section-repos";

const RepoCardSection = (prop) => {
  return (
    <div
      className="sect-repo-container"
      style={{
        display: "flex",
        flexDirection: "row",
        // height: "50px",
        // width: "300px",
        backgroundColor: "lightgrey",
        // "border-radius": "5px",
        // "justify-content": "space-between",
        // margin: "5px 0",
      }}
    >
      <h4>Repository Name</h4>
      <p>Repository Details to be populated here</p>
    </div>
  );
};

export default RepoCardSection;
