/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cx from "classnames";
import React, { useEffect } from "react";
// import ReactHtmlParser from "react-html-parser";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";
import { useSpeechSynthesis } from "react-speech-kit";

import {
  capitalizeSentence,
  checkStringColor,
  removeSpecialCharacters,
} from "../helpers/index";
import WordPlay from "./WordPlay";

const BookPage = React.forwardRef(
  (
    { tokens, onSelectedWord, index: pageIndex, onPrev, onNext, children },
    ref
  ) => {
    const { speak } = useSpeechSynthesis();

    const pageNumber = pageIndex + 1;

    const handleClick = ( word ) => {

      onSelectedWord(word);
    };

    // split's sentences into words with own on click button
    const sentenceSplit = () => {
      const upperCaseString = capitalizeSentence(children);
      // split sentences into words
      return upperCaseString.split(/ /g).map((word, index) => (
        <span
          className={cx("page-word", "PG", removeSpecialCharacters(word))}
          key={index}
          style={{ color: checkStringColor(removeSpecialCharacters(word)) }}
          onClick={() => handleClick(word, index)}
        >
          {` ${word}`}
        </span>
      ));
    };

    useEffect(() => {
      // tokensMap();
    }, []);
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
          <div className="sentence-speech">
            <WordPlay text={children} />
          </div>
          <p className="page-text">{sentenceSplit()}</p>
        </div>
        <p className="page-number">{pageNumber}</p>
      </div>
    );
  }
);

export default BookPage;
