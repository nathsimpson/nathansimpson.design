/** @jsxImportSource @emotion/react */

import { Heading, Text } from '@design-system/typography';
import { TextLink } from '@design-system/textlink';

export const Contact = () => (
  <div>
    <Heading level={2}>Contact Me</Heading>
    <Text>
      Would you like to get in touch? Feel free to message me through{' '}
      <TextLink href="https://twitter.com/nathjsimpson" target="_blank">
        Twitter
      </TextLink>{' '}
      or{' '}
      <TextLink href="https://www.linkedin.com/in/nathan-simpson-71512a75/?trk">
        LinkedIn
      </TextLink>
      .
    </Text>
  </div>
);
