import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import "./Home.css";
import background from "../img/background1.webp";

const Home = () => {
  return (
    <div className="Home" >
      <ProfileSide/>
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
