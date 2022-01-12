import { Landing } from "components/templates";
import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import "styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Landing>
      <Component {...pageProps} />
    </Landing>
  );
}

export default MyApp;
