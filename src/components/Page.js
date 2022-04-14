/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const Page = React.forwardRef(({ tokens, children, onSelectedWord }, ref) => {
  const handleClick = (word, index) => {
    // console.log("clicked", word);
    // console.log("token", tokens[index].value);
    onSelectedWord(tokens[index].value);
  };

  const sentenceCleaner = () => {
    const regEx = /(^\w{1}|\.\s*\w{1})/gi;
    // eslint-disable-next-line func-names
    const clean = children.replace(regEx, function (toReplace) {
      return toReplace.toUpperCase();
    });
    // console.log("clean", clean);

    return clean.split(/ /g).map((word, index) => (
      <span
        className="page-word PG"
        key={index}
        onClick={() => handleClick(word, index)}
      >
        {` ${word}`}
      </span>
    ));
  };
  return (
    <div className="page-content" ref={ref}>
      <p className="page-text">{sentenceCleaner()}</p>
    </div>
  );
});

export default Page;
