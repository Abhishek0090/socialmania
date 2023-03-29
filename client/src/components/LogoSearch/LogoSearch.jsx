import React from "react";
import Logo from "../../img/logox.png";
import { UilSearch } from "@iconscout/react-unicons";
import './LogoSearch.css';
import { Link } from 'react-router-dom';


const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="/home">
      <img src={Logo} alt="logo"  width="70" height="45"/>
      </Link>
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
