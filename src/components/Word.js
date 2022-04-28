/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

function Word({ handleClick, word, value, style, className }) {
  return (
    <span
      className={className}
      style={style}
      onClick={() => handleClick(value)}
    >
      {word}
    </span>
  );
}

export default Word;
