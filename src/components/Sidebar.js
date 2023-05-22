import React, { useState } from "react";
import Logo from "../assets/JDALogo2.png";

const Sidebar = () => {
  const [sort, setSort] = useState("");
  return (
    <div className="sidebar">
      <div className="part">
        <div className="logo">
          <img src={Logo} className="image" alt="logo" />
          <div className="text">JurisDoctor.ai</div>
        </div>
        <div className="sortby">Sort by:</div>
        <div className="menu">
          <div
            className={sort === "recent" ? "item selected" : "item"}
            onClick={() => setSort("recent")}
          >
            <div className="recent icon" />
            <div className="text">Recent</div>
          </div>
          <div
            className={sort === "contract" ? "item selected" : "item"}
            onClick={() => setSort("contract")}
          >
            <div className="contract icon" />
            <div className="text">Contracts</div>
          </div>
          <div
            className={sort === "review" ? "item selected" : "item"}
            onClick={() => setSort("review")}
          >
            <div className="review icon" />
            <div className="text">Document Review</div>
          </div>
          <div
            className={sort === "client" ? "item selected" : "item"}
            onClick={() => setSort("client")}
          >
            <div className="communication icon" />
            <div className="text">Client Communications</div>
          </div>
          <div
            className={sort === "clause" ? "item selected" : "item"}
            onClick={() => setSort("clause")}
          >
            <div className="clauses icon" />
            <div className="text">Clauses</div>
          </div>
          <div
            className={sort === "compliance" ? "item selected" : "item"}
            onClick={() => setSort("compliance")}
          >
            <div className="clauses icon" />
            <div className="text">Legal Compliance</div>
          </div>
          <div
            className={sort === "reasoning" ? "item selected" : "item"}
            onClick={() => setSort("reasoning")}
          >
            <div className="clauses icon" />
            <div className="text">Legal Reasoning</div>
          </div>
          <div className="item red" onClick={() => setSort("suggest")}>
            <div className="suggest icon" />
            <div className="text">Suggest a Master Module</div>
          </div>
        </div>
      </div>

      <div className="btn">
        <div className="icon plus" />
        <div className="text">Invite new member</div>
      </div>
    </div>
  );
};

export default Sidebar;
