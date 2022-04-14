/* eslint-disable react/no-array-index-key */
import "./View.scss";

import { useQuery } from "@apollo/client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import BookCover from "../components/BookCover";
import Modal from "../components/Modal";
import Page from "../components/Page";
import { GET_BOOK } from "../graphql/Queries";
import DefaultLayout from "../layouts/DefaultLayout";

function View() {
  const [bookDetails, setDetails] = useState({});
  const [bookPages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedWord, setSelectedWord] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);

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
  const onInit = useCallback(() => {
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
  if (error) return <DefaultLayout>{error}</DefaultLayout>;

  return (
    <DefaultLayout>
      {modalVisibility && (
        <Modal
          modalVisibility={modalVisibility}
          handleClose={handleClose}
          selectedWord={selectedWord}
        />
      )}
      <div className="view-container">
        <HTMLFlipBook
          showCover
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
          <BookCover title={bookDetails.title} author={bookDetails.author} />
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
          <BookCover title="THE END" />
        </HTMLFlipBook>
        <div className="book-actions">
          <button type="button" onClick={prevPage}>
            Prev
          </button>
          {currentPage + 1} of {pageCount}
          <button type="button" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default View;
