import React from "react";

const BookCover = React.forwardRef(({ title, author }, ref) => {
  return (
    <div className="page page-cover" data-density="hard" ref={ref}>
      <div className="page-content">
        {title && <h2 className="H2">{title}</h2>}
        {author && <p className="H4 lfr">{author}</p>}
      </div>
    </div>
  );
});

export default BookCover;
