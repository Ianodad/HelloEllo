import React from 'react'
import Rodal from "rodal";

const Modal = ({ modalVisibility, handleClose, selectedWord }) => {
  return (
    <Rodal visible={modalVisibility} onClose={() => handleClose()}>
      <div>{selectedWord}</div>
    </Rodal>
  );
};

export default Modal