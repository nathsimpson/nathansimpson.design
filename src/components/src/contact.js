/** @jsx jsx */
import { jsx } from '@emotion/core';

export default () => (
  <div
    css={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <h2 css={{ textAlign: 'center' }}>Contact Me</h2>
    <p css={{ textAlign: 'center' }}>
      Would you like to get in touch? Feel free to message me through{' '}
      <a href="https://twitter.com/nathjsimpson" target="_blank">
        Twitter
      </a>{' '}
      or{' '}
      <a href="https://www.linkedin.com/in/nathan-simpson-71512a75/?trk">
        LinkedIn
      </a>
      .
    </p>
  </div>
);
