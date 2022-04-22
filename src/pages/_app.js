import { Landing } from "components/templates";
import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import "styles/global.css";
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { getStrapiURL } from "../lib/api";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>

      <Landing>
        <Component {...pageProps} />
      </Landing>
    </ApolloProvider>
  );
};

// // getInitialProps disables automatic static optimization for pages that don't
// // have getStaticProps. So article, category and home pages still get SSG.
// // Hopefully we can replace this with getStaticProps once this issue is fixed:
// // https://github.com/vercel/next.js/discussions/10949
// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
//   const global = await fetchAPI("/global");
//   // Pass the data to our page via props
//   return { ...appProps, pageProps: { global } };
// };

export default MyApp;
