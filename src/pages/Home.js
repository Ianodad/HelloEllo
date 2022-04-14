import "./Home.scss";

import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GET_AUTHORS } from "../graphql/Queries";
import DefaultLayout from "../layouts/DefaultLayout";

function Home() {
  const [books, setBooks] = useState([]);
  const { loading, error, data } = useQuery(GET_AUTHORS);

  useEffect(() => {
    if (data) {
      setBooks([data.book]);
    }
  }, [data]);

  if (loading) return <DefaultLayout>Loading...</DefaultLayout>;
  if (error) return <DefaultLayout>{error}</DefaultLayout>;
  return (
    <DefaultLayout>
      <div className="home-header">
        <h1 className="H1">WELCOME</h1>
        <h3 className="H3">Pick A BOOK!!!</h3>
      </div>
      <div className="book-shelves">
        {books?.map((book, keys) => (
          <Link className="book" keys={keys} to={`/view/${book.title}`}>
            <div className="card">
              <div className="card-body">
                <img src="https://unsplash.it/130/180" alt="book" />
              </div>
            </div>
            <div className="book-title">{book.title}</div>
          </Link>
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Home;
