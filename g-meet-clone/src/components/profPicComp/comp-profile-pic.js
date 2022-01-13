import React from "react";
import { isPropertyAccessChain } from "typescript";
import ProfImage from "../../imgs/icon.ico";

const ProfilePic = (prop) => {
  return (
    <img
      style={{ "border-radius": "50%" }}
      src={ProfImage}
      alt="?"
      width={prop.size}
      height={prop.size}
    />
  );
};

export default ProfilePic;
