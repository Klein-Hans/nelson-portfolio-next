import { ApolloClient, InMemoryCache } from "@apollo/client";
import getStrapiURL from "./src/lib/api";

// export const getStrapiURL = () => {
//   return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"}`;
// };

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
