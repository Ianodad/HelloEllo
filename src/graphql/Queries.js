import {
  gql
} from "@apollo/client";

export const GET_AUTHORS = gql`
    query {
        book{
            author
            title
        }
    }
`;

export const GET_BOOK = gql`
  query {
    book {
      author
      title
      pages {
        content
        pageIndex
        tokens {
          position
          value
        }
      }
    }
  }
`;