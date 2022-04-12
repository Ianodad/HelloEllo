import React from "react";
import "./DefaultLayout.scss";
const defaultLayout = ({ children }) => {
  return <div id="container-layout">{children}</div>;
};

export default defaultLayout;
