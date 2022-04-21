import React from "react";
import ContentLoader from "react-content-loader";

function ViewLoader() {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={700}
      viewBox="0 0 500 700"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <path d="M 0 25 C 0 11.193 11.193 0 25 0 h 435 c 22.091 0 40 17.909 40 40 v 620 c 0 22.091 -17.909 40 -40 40 H 25 c -13.807 0 -25 -11.193 -25 -25 V 25 z" />
    </ContentLoader>
  );
}

export default ViewLoader;
