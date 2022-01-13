import React, { useState } from "react";
import FuncSearch from "./comp-search-bar";
import ProfileCard from "./comp-card-profile";
import RepoCardSection from "./comp-repos-section/comp-section-repos";

const CompContainer = (prop) => {
  let [apiResult, setApiResult] = useState(0);

  return (
    <>
      <FuncSearch ApiResult={setApiResult}></FuncSearch>
      <ProfileCard ApiResult={apiResult}></ProfileCard>
      {/* <RepoCardSection></RepoCardSection> */}
    </>
  );
};

export default CompContainer;
