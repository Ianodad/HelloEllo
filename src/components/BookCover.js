/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { ImCircleRight } from "react-icons/im";

const BookCover = React.forwardRef(({ title, author, onOpen }, ref) => {
  return (
    <div className="page page-cover" data-density="hard" ref={ref}>
      {author && (
        <div className="open-icon-container">
          <ImCircleRight className="open-icon" color="white" onClick={onOpen} />
        </div>
      )}
      <div className="page-content">
        {title && <h2 className="H2">{title}</h2>}
        {author && <p className="H4 lfr">{author}</p>}
      </div>
    </div>
  );
});

export default BookCover;
