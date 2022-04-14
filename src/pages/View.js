import React, { useState, useEffect, useRef, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../graphql/Queries";
import DefaultLayout from "../layouts/DefaultLayout";
import HTMLFlipBook from "react-pageflip";
import "./View.scss";
import Page from "../components/Page";
import BookCover from "../components/BookCover";
import Modal from "../components/Modal";

const View = () => {
  const [bookDetails, setDetails] = useState({});
  const [bookPages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const book = useRef();

  const { loading, error, data } = useQuery(GET_BOOK);

  const prevPage = () => {
    book.current.pageFlip().flipPrev();
  };
  const nextPage = () => {
    book.current.pageFlip().flipNext();
  };

  const onFlip = () => {
    setCurrentPage(book.current.pageFlip().getCurrentPageIndex());
  };

  const onSelectedWord = (word) => {
    console.log("selected", word);
    setSelectedWord(word);
    setModalVisibility(true);
  };

  const handleClose = () => {
    setModalVisibility(false);
    setSelectedWord("");
  };
  // setting page count
  const onInit = useCallback((e) => {
    if (book && book.current) {
      setPageCount(book.current.pageFlip().getPageCount());
    }
  }, []);

  useEffect(() => {
    if (data) {
      setDetails({ author: data.book.author, title: data.book.title });
      setPages(data.book.pages);
    }
  }, [data]);
  if (loading) return <DefaultLayout>Loading...</DefaultLayout>;
  if (error) return <DefaultLayout>Error</DefaultLayout>;

  return (
    <DefaultLayout>
      <div className="view-container">
        <HTMLFlipBook
          showCover={true}
          width={600}
          height={720}
          minHeight={200}
          minWidth={200}
          ref={book}
          onInit={onInit}
          onFlip={onFlip}
          useMouseEvents={false}
          style={{ margin: "0 auto" }}
        >
          <BookCover />
          {bookPages.map((page, index) => (
            <div className="page" key={index}>
              <Page
                className="page"
                index={index}
                tokens={page.tokens}
                onSelectedWord={onSelectedWord}
              >
                {page.content}
              </Page>
            </div>
          ))}
          <BookCover v />
        </HTMLFlipBook>
        <div className="book-actions">
          <button onClick={prevPage}>Prev</button>
          {currentPage + 1} of {pageCount}
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
      <Modal
        modalVisibility={modalVisibility}
        handleClose={handleClose}
        selectedWord={selectedWord}
      />
    </DefaultLayout>
  );
};

export default View;
