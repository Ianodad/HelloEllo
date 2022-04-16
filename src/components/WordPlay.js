import React from "react";
import { ImPlay2 } from "react-icons/im";
import { useSpeechSynthesis } from "react-speech-kit";

function WordPlay({ text }) {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="word-play-container">
      <button
        className="play-button"
        type="button"
        onClick={() => speak({ text })}
      >
        <ImPlay2 />
      </button>
    </div>
  );
}

export default WordPlay;
