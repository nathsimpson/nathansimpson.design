/** @jsx jsx */
import Layout from '../templates/layout';
import { jsx } from '@emotion/core';
import Helmet from 'react-helmet';
import { colors, text, headings } from '../theme';

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nathan Simpson - Designer + Frontend Developer</title>
      <meta
        name="description"
        content="I am a UX Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
      />
    </Helmet>
    <main>
      <h1>Design System</h1>

      <div>
        <h2>Colors</h2>
        <div css={{ display: 'flex', flexDirection: 'row' }}>
          {Object.keys(colors.slate).map(s => (
            <div
              css={{
                width: 80,
                height: 70,
                backgroundColor: colors.slate[s],
                color: 'white'
              }}
              key={s}
            >
              {`slate.${s}`}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Text</h2>
        <div>
          {Object.keys(text).map(t => (
            <p css={{ ...text[t], margin: 0 }} key={t}>{`Text ${t}.`}</p>
          ))}
        </div>
      </div>

      <div>
        <h2>Headings</h2>
        <div>
          {Object.keys(headings).map(h => (
            <p css={headings[h]} key={h}>{`H${h}`}</p>
          ))}
        </div>
      </div>
    </main>
  </Layout>
);
