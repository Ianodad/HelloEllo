import cx from "classnames";
import React from "react";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";

function Pagination({ className, currentPage, pageCount, nextPage, prevPage }) {
  return (
    <div className={cx("pagination-container", className)}>
      {currentPage === 0 && (
        <button className="open-button" type="button" onClick={nextPage}>
          <span className="open-button-text">OPEN</span>
        </button>
      )}
      {currentPage > 0 && (
        <>
          <button className="prev-button" type="button" onClick={prevPage}>
            <BiCaretLeftCircle className="prev-icon" />
          </button>
          <div className="pagination">
            <span>{currentPage + 1}</span> of
            <span> {pageCount}</span>
          </div>
          <button className="next-button" type="button" onClick={nextPage}>
            <BiCaretRightCircle className="next-icon" />
          </button>
        </>
      )}
    </div>
  );
}

export default Pagination;
