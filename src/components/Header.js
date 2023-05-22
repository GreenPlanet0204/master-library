import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar/1.jpg";

const Header = ({ tab }) => {
  console.log(tab);
  return (
    <div className="header">
      <div className="content">
        <div className="menu">
          <Link to="/" className={tab === 0 ? "item selected" : "item"}>
            Master Library
          </Link>
          <Link to="/library" className={tab === 1 ? "item selected" : "item"}>
            My Library
          </Link>
          <Link to="/module" className={tab === 2 ? "item selected" : "item"}>
            Module Builder
          </Link>
          <Link to="/custom" className={tab === 3 ? "item selected" : "item"}>
            Get A Custom Module
          </Link>
          <Link to="/support" className={tab === 4 ? "item selected" : "item"}>
            Support
          </Link>
        </div>
        <div className="avatar">
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
