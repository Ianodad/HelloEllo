import "./DefaultLayout.scss";

import React from "react";
import { Link } from "react-router-dom";

const defaultLayout = ({ children }) => {
  return (
    <div id="container-layout">
      <Link to="/" className="nav-main">
        HOME
      </Link>
      <div className="child-container">{children}</div>
    </div>
  );
};

export default defaultLayout;
