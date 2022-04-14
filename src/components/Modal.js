/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import cx from "classnames";
import React from "react";
import { IoClose } from "react-icons/io5";

function ModalContainer({ modalVisibility, handleClose, selectedWord }) {
  return (
    <>
      <div
        className={cx("modal-container", { hidden: !modalVisibility })}
        open={modalVisibility}
      >
        <div className="modal-body">
          <div>
            <p className="modal-text PG">{selectedWord}</p>
          </div>
          <div
            onClick={() => handleClose()}
            className="close-button"
            tabIndex="0"
          >
            <IoClose />
          </div>
        </div>
      </div>
      <div
        className={cx("modal-overlay", { hidden: !modalVisibility })}
        id="modal-overlay"
      />
    </>
  );
}

export default ModalContainer;
