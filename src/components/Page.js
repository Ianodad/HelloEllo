/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cx from "classnames";
import React from "react";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";
import { useSpeechSynthesis } from "react-speech-kit";

import WordPlay from "./WordPlay";

const Page = React.forwardRef(
  (
    { tokens, onSelectedWord, index: pageIndex, onPrev, onNext, children },
    ref
  ) => {
    const { speak } = useSpeechSynthesis();

    const pageNumber = pageIndex + 1;
    const handleClick = (word, index) => {
      onSelectedWord(tokens[index].value);
    };
    const checkColor = (strColor) => {
      const s = new Option().style;
      s.color = strColor;

      return s.color === strColor ? strColor : "";
    };
    const wordClean = (str) => {
      return str.replace(/[^a-zA-Z0-9]/g, "");
    };
    // split's sentences into words with own on click button
    const sentenceSplit = () => {
      // used to check and find complete sentences.
      const regEx = /(^\w{1}|\.\s*\w{1})/gi;
      // eslint-disable-next-line func-names
      const upperCaseString = children.replace(regEx, function (toReplace) {
        return toReplace.toUpperCase();
      });
      // split sentences into words
      return upperCaseString.split(/ /g).map((word, index) => (
        <span
          className={cx("page-word", "PG", wordClean(word))}
          key={index}
          style={{ color: checkColor(wordClean(word)) }}
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
        <div className="page-body">
          <div className="sentenceSpeech">
            <WordPlay text={children} />
          </div>
          <p className="page-text">{sentenceSplit()}</p>
        </div>
        <p className="page-number">{pageNumber}</p>
      </div>
    );
  }
);

export default Page;
