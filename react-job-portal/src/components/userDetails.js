import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function UserDetails(props) {
  const { state } = useLocation();
  let navigate = useNavigate();

  console.log("7", state);
  useEffect(() => {
    console.log("Component did mount");
  }, []);
  if (!state) {
    return (
      <div>
        Error Occured while fetching the data. Please Contact Administrator.{" "}
      </div>
    );
  }

  const _handleOnSelect = () => {
    // console.log(state);
    const selectList = JSON.parse(localStorage.getItem("selectList"));
    // console.log(selectList);
    selectList.push(state);
    // console.log(selectList);
    // console.log(JSON.stringify(selectList));
    localStorage.setItem("selectList", JSON.stringify(selectList));
    // console.log(localStorage.getItem("selectList"));

    // Deleting object from Main List
    const mainList = JSON.parse(localStorage.getItem("mainList"));
    for (let index = 0; index < mainList.length; index++) {
      if (mainList[index].id === state.id) {
        mainList.splice(index, 1);
      }
    }
    console.log(mainList);
    // console.log(JSON.stringify(mainList));
    localStorage.setItem("mainList", JSON.stringify(mainList));
    // console.log(localStorage.getItem("mainList"));

    navigate(`/`);
  };
  const _handleOnReject = () => {
    // console.log(state);
    const rejectList = JSON.parse(localStorage.getItem("rejectList"));
    // console.log(rejectList);
    rejectList.push(state);
    // console.log(rejectList);
    // console.log(JSON.stringify(rejectList));
    localStorage.setItem("rejectList", JSON.stringify(rejectList));
    // console.log(localStorage.getItem("rejectList"));

    // Deleting object from Main List
    const mainList = JSON.parse(localStorage.getItem("mainList"));
    for (let index = 0; index < mainList.length; index++) {
      if (mainList[index].id === state.id) {
        mainList.splice(index, 1);
      }
    }
    console.log(mainList);
    // console.log(JSON.stringify(mainList));
    localStorage.setItem("mainList", JSON.stringify(mainList));
    // console.log(localStorage.getItem("mainList"));

    navigate(`/`);
  };
  return (
    <div className="UserDetails">
      <div
        className="cand-card"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100px",
          width: "400px",
          backgroundColor: "lightgrey",
          borderRadius: "5px",
          justifyContent: "space-evenly",
          margin: "5px 0",
        }}
      >
        <img
          style={{ borderRadius: "50%" }}
          src={state.Image}
          alt=""
          width={"100px"}
          height={"100px"}
        />
        <h4 id={"nameId"}>{state.name}</h4>
        <h5 id={"idId"}>{state.id}</h5>
        <button onClick={() => _handleOnSelect()}>Select</button>
        <button onClick={() => _handleOnReject()}>Reject</button>
      </div>
    </div>
  );
}

export default UserDetails;
