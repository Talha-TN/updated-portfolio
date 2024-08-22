import React from "react";
import profile from "../assets/profile.jpg";
const ProfilePic = () => {
  return (
    <img
      src={profile}
      alt="develper picture"
      className="picture rounded mx-auto d-block"
    />
  );
};

export default ProfilePic;
