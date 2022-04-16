/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import cx from "classnames";
import React from "react";
import { GrClose } from "react-icons/gr";

import WordPlay from "./WordPlay";
// handles modal for word on click render
function ModalContainer({ modalVisibility, handleClose, selectedWord }) {
  return (
    <>
      {/* dynamic class for dynamic styling */}
      <div
        className={cx("modal-container", { hidden: !modalVisibility })}
        open={modalVisibility}
      >
        <div className="modal-body">
          <p className="modal-text PG">{selectedWord}</p>
          <div className="modal-action">
            <WordPlay text={selectedWord} />
          </div>
        </div>
        <button
          type="button"
          onClick={() => handleClose()}
          className="close-button"
        >
          <GrClose />
        </button>
      </div>
      <div
        className={cx("modal-overlay", { hidden: !modalVisibility })}
        id="modal-overlay"
      />
    </>
  );
}

export default ModalContainer;
