import { Landing } from 'components/templates';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <Landing>
      <Component {...pageProps} />
    </Landing>
  );
}

export default MyApp;
