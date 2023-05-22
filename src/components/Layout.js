import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, tab }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header tab={tab} />
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
