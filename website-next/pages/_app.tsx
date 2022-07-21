import { Core } from '../components/Core';
import '../styles/globals.css';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Core>
      <Component {...pageProps} />
    </Core>
  );
}

export default MyApp;