import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    if (graphQLErrors) {
      for (const error of graphQLErrors) {
        console.error(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`,
          operation,
          response
        );
      }
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`, operation, response);
    }
  }
);

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql",
  }),
]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
