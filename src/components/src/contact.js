/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Heading, Text } from '../../../design-system/typography';

export default () => (
  <div>
    <Heading level={2}>Contact Me</Heading>
    <Text>
      Would you like to get in touch? Feel free to message me through{' '}
      <a href="https://twitter.com/nathjsimpson" target="_blank">
        Twitter
      </a>{' '}
      or{' '}
      <a href="https://www.linkedin.com/in/nathan-simpson-71512a75/?trk">
        LinkedIn
      </a>
      .
    </Text>
  </div>
);
