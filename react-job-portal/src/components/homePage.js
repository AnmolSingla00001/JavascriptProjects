import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CandCard from "./comp-candidate-card";
import FuncSearch from "./comp-search-bar";
import GetRequest from "./utils/apiCaller";

function Homepage() {
  const [mainList, setMainList] = useState([]);
  let [homeList, setHomeList] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const [rejectList, setRejectList] = useState([]);
  const [searchTxt, searchTxtSetter] = useState("");
  let navigate = useNavigate();

  const candOpen = (cardObj) => {
    console.log("candOpen Called", cardObj);
    navigate(`/userdetails/${cardObj.id}`, { state: cardObj });
    console.log("13", navigate.state);
  };

  useEffect(() => {
    console.log("Component did mount");

    //Initialising API Caller and Local Storage
    const fetchCands = async () => {
      const candidateObjectArr = await GetRequest(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      );
      await console.log("Called API 19", candidateObjectArr);
      await setMainList(candidateObjectArr);
      await localStorage.setItem("mainList", JSON.stringify(mainList));
    };

    // Creating Local Storage Entries if not existing
    if (!localStorage.getItem("mainList")) {
      console.log("Creating Local Storage");
      localStorage.setItem("mainList", "[]");
      localStorage.setItem("selectList", "[]");
      localStorage.setItem("rejectList", "[]");

      fetchCands();
    }
    // Fetching Local Storage Entries if existing
    else {
      console.log("Local Storage Existing");
      setMainList(JSON.parse(localStorage.getItem("mainList")));
      setSelectList(JSON.parse(localStorage.getItem("selectList")));
      setRejectList(JSON.parse(localStorage.getItem("rejectList")));
    }
  }, []);

  // Updating Local Storage if Main List Change
  useEffect(() => {
    localStorage.setItem("mainList", JSON.stringify(mainList));
    setHomeList([...mainList]);
  }, [mainList]);

  useEffect(() => {
    console.log("HomeList is - ", homeList);
  }, [homeList]);

  useEffect(() => {
    console.log("Search Text Changed", searchTxt);
    setHomeList(mainList.filter((userObj) => userObj.name.includes(searchTxt)));
    console.log("HomeList is ", homeList);
  }, [searchTxt]);
  return (
    <div className="Homepage">
      <FuncSearch setSearch={searchTxtSetter}></FuncSearch>

      <div
        className="listed-container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "50px",
          width: "300px",
          backgroundColor: "lightgrey",
        }}
      >
        {homeList.map((candidate) => {
          return (
            <CandCard
              cardObj={candidate}
              key={candidate.id}
              cardClick={candOpen}
            ></CandCard>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
