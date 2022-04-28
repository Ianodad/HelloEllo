/* eslint-disable no-eval */
/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cx from "classnames";
import React from "react";
// import ReactHtmlParser from "react-html-parser";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";
import JsxParser from "react-jsx-parser";
import { useSpeechSynthesis } from "react-speech-kit";

import {
  capitalizeSentence,
  checkStringColor,
  removeSpecialCharacters,
} from "../helpers/index";
import Word from "./Word";
import WordPlay from "./WordPlay";

const BookPage = React.forwardRef(
  (
    { tokens, onSelectedWord, index: pageIndex, onPrev, onNext, children },
    ref
  ) => {
    const pageNumber = pageIndex + 1;

    const handleClick = (word) => {
      onSelectedWord(word);
    };

    const tokensSentenceMap = () => {
      let sentence = children;

      for (let i = tokens.length - 1; i >= 0; i--) {
        // destructure the tokens properties
        const { position, value } = tokens[i];
        // get start index position of the word
        const indexStart = position[0];
        // get end index position of the word
        const indexEnd = position[1];
        // get the pre string sentence from index 0 to the start of word indexStart: ;
        const preSentence = sentence.substring(0, indexStart);
        // get the post string sentence from the end of word indexEnd to the end of sentence: ;
        const postSentence = sentence.substring(indexEnd);
        // get the word string from the start of word indexStart to the end of word indexEnd: ;
        const word = sentence.substring(indexStart, indexEnd);
        // get the word if it color for styling purposes
        const wordColor = checkStringColor(removeSpecialCharacters(word));
        // classNames for the word
        const className = cx("page-word", "PG", removeSpecialCharacters(word));
        // this is jsx contains the Word component to be replaced between the pre and post sentence
        const coreJsxSentence = `<Word className="${className}" value="${value}" word="${word}" handleClick={handleClick} style="color: ${wordColor}">${word}</Word>`;

        sentence = `${preSentence}${coreJsxSentence}${postSentence}`;
      }

      return sentence;
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
          <div className="sentence-speech">
            <WordPlay text={children} />
          </div>
          <JsxParser
            bindings={{
              handleClick,
            }}
            components={{ Word }}
            className="page-text PG"
            jsx={tokensSentenceMap()}
          />
        </div>
        <p className="page-number">{pageNumber}</p>
      </div>
    );
  }
);

export default BookPage;
