/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";

const Page = React.forwardRef(
  (
    { tokens, children, onSelectedWord, index: pageIndex, onPrev, onNext },
    ref
  ) => {
    const pageNumber = pageIndex + 1;
    const handleClick = (word, index) => {
      // console.log("clicked", word);
      // console.log("token", tokens[index].value);
      onSelectedWord(tokens[index].value);
    };
    const checkColor = (strColor) => {
      const s = new Option().style;
      s.color = strColor;

      return s.color === strColor ? strColor : "";
    };
    const sentenceCleaner = () => {
      const regEx = /(^\w{1}|\.\s*\w{1})/gi;
      // eslint-disable-next-line func-names
      const upperCaseString = children.replace(regEx, function (toReplace) {
        return toReplace.toUpperCase();
      });
      // console.log("clean", clean);

      return upperCaseString.split(/ /g).map((word, index) => (
        <span
          className="page-word PG"
          key={index}
          style={{ color: checkColor(word) }}
          onClick={() => handleClick(word, index)}
        >
          {` ${word}`}
        </span>
      ));
    };
    return (
      <div className="page-content" ref={ref}>
        {pageNumber % 2 !== 0 && (
          <div className="page-icon">
            <ImCircleLeft className="prev-icon" onClick={onPrev} />
          </div>
        )}
        {pageNumber % 2 === 0 && (
          <div className="page-icon">
            <ImCircleRight className="next-icon" onClick={onNext} />
          </div>
        )}
        <p className="page-number">{pageNumber}</p>
        <p className="page-text">{sentenceCleaner()}</p>
      </div>
    );
  }
);

export default Page;
