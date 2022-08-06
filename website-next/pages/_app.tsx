import { AppProps } from 'next/app';
import { Core } from '../components/Core';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Core>
      <Component {...pageProps} />
      <Footer />
    </Core>
  );
}

export default MyApp;
