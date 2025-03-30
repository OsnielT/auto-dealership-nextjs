import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`, // Replace with your Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
