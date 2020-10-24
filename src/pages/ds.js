/** @jsx jsx */
import { Layout } from '../components';
import { jsx } from '@emotion/core';
import { colors, fontsizes, headings } from '../theme';

export default () => (
  <Layout>
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
      <h2>Font sizes</h2>
      <div>
        {Object.keys(fontsizes).map(t => (
          <p css={{ ...fontsizes[t], margin: 0 }} key={t}>{`Size ${t}.`}</p>
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
  </Layout>
);
