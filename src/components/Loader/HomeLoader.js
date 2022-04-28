import React from "react";
import ContentLoader from "react-content-loader";

function HomeLoader() {
  return (
    <ContentLoader
      speed={2}
      width={700}
      height={695}
      viewBox="0 0 700 695"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <path d="M 0 50 C 0 22.386 22.386 0 50 0 h 600 c 27.614 0 50 22.386 50 50 s -22.386 50 -50 50 H 50 C 22.386 100 0 77.614 0 50 z M 141 166 c 0 -16.569 13.431 -30 30 -30 h 340 c 16.569 0 30 13.431 30 30 c 0 16.569 -13.431 30 -30 30 H 171 c -16.569 0 -30 -13.431 -30 -30 z M 200 285 c 0 -5.523 4.477 -10 10 -10 h 270 c 11.046 0 20 8.954 20 20 v 380 c 0 11.046 -8.954 20 -20 20 H 210 c -5.523 0 -10 -4.477 -10 -10 V 285 z" />
    </ContentLoader>
  );
}

export default HomeLoader;
