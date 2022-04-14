import "./DefaultLayout.scss";

import React from "react";

const defaultLayout = ({ children }) => {
  return <div id="container-layout">{children}</div>;
};

export default defaultLayout;
