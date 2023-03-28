import React from "react";
import Logo from "../../img/logox.png";
import { UilSearch } from "@iconscout/react-unicons";
import './LogoSearch.css';


const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="logo"  width="70" height="45"/>
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
