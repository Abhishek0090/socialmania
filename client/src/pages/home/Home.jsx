import React from "react";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="profileSide">
        
        <ProfileSide/>

        </div>
      <div className="postSide">Post</div>
      <div className="RightSide">Right</div>
    </div>
  );
};

export default Home;
