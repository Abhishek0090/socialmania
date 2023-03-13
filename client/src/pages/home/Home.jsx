import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="profileSide">
        
        <ProfileSide/>

        </div>
      <PostSide/>
      <div className="RightSide">Right</div>
    </div>
  );
};

export default Home;
