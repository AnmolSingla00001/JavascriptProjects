import React from "react";

const ProfileCard = (props) => {
  return (
    <div
      className="prof-container"
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
      <div
        className="prof-img-container"
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
        <img
          style={{ borderRadius: "50%" }}
          // src={"https://avatars.githubusercontent.com/u/11860111?v=4"}
          src={props.avatar_url}
          alt=""
          //   width={prop.size}
          //   height={prop.size}
        />
        {/* <h3>Ankit Jain</h3> */}
        <h3>{props.name}</h3>
      </div>
      {/* <input
        type="text"
        id="inp_search"
        placeholder="Enter the GIT Username."
      ></input>
      <button>Search</button> */}
    </div>
  );
};

export default ProfileCard;
