import React from "react";

const Page = React.forwardRef(({ tokens, children, onSelectedWord }, ref) => {
  const handleClick = (word, index) => {
    // console.log("clicked", word);
    // console.log("token", tokens[index].value);
    onSelectedWord(tokens[index].value);
  };

  const sentnceCleaner = () => {
    const regEx = /(^\w{1}|\.\s*\w{1})/gi;
    let clean = children.replace(regEx, function (toReplace) {
      return toReplace.toUpperCase();
    });
    // console.log("clean", clean);

    return clean.split(/ /g).map((word, index) => (
      <span
        className="page-word"
        key={index}
        onClick={() => handleClick(word, index)}
      >
        {" " + word}
      </span>
    ));
  };
  return (
    <div className="page-content" ref={ref}>
      {/* {console.log(children, "children")} */}
      <p className="page-text">{sentnceCleaner()}</p>
      {/* <div className="page-text">{children}</div> */}
      {/* <div className="page-footer">{pageNumber + 1}</div> */}
    </div>
  );
});

export default Page;
