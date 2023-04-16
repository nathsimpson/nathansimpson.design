import { AppProps } from 'next/app';
import Head from 'next/head';
import { useTheme } from '../lib/theme';
import { Core } from '../components/Core';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const { colors } = useTheme();
  return (
    <Core>
      <Head>
        <title>Nathan Simpson - UI Designer + Developer</title>
        <meta
          name="description"
          content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FA6D01" />
        <meta name="theme-color" content={colors.background.default} />
        <meta charSet="utf-8" />
      </Head>

      <Component {...pageProps} />
      <Footer />
    </Core>
  );
}

export default MyApp;
