import React from "react";

const BookCover = React.forwardRef(({ title, author }, ref) => {
  return (
    <div className="page page-cover" data-density="hard" ref={ref}>
      <div className="page-content">
        <h2 className="">title</h2>
        <p>by Author</p>
      </div>
    </div>
  );
});

export default BookCover;
