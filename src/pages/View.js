import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../graphql/Queries";
import DefaultLayout from "../layouts/DefaultLayout";

const View = () => {
  const [book, setBook] = useState([]);
  const [bookDetails, setDetails] = useState({});
  const [bookPages, setPages] = useState([]);
  const [viewPageIndex, setViewPageIndex] = useState([0, 1]);

  const { loading, error, data } = useQuery(GET_BOOK);

  const prevPage = () => {
    if (viewPageIndex[0] > 0) {
      setViewPageIndex([viewPageIndex[0] - 2, viewPageIndex[1] - 2]);
    }
  };
  const nextPage = () => {
    if (viewPageIndex[1] < bookPages.length - 1) {
      setViewPageIndex([viewPageIndex[0] + 2, viewPageIndex[1] + 2]);
    }
  };

  useEffect(() => {
    if (data) {
      setDetails({ author: data.book.author, title: data.book.title });
      setPages(data.book.pages);
      console.log(data.book.pages[0].content);
    }
  }, [data]);
  if (loading) return <DefaultLayout>Loading...</DefaultLayout>;
  if (error) return <DefaultLayout>Error</DefaultLayout>;
  return (
    <DefaultLayout>
      <div>
        <div className="header">Topic</div>
        <div>
          <div className="left-page">{bookPages[viewPageIndex[0]].content}</div>
          <div className="right-page">
            {bookPages[viewPageIndex[1]].content}
          </div>
        </div>
        <div className="actions">
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default View;
