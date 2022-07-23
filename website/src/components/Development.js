/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Tag } from '@design-system/tag';
import { Stack } from '@nathsimpson/box';

import { Heading, Text } from '@nathsimpson/typography';
import { TextLink } from '@nathsimpson/text-link';

import { Cluster } from './Cluster';
import { development_skills } from '../data';

export const Development = () => {
  return (
    <div css={{ width: '100%' }}>
      <Stack gap="medium" css={{ maxWidth: 800 }}>
        <Heading level={2}>Development</Heading>

        <Text>
          I love bringing concepts to life through code. Most of my time is
          spent building products for awesome clients, as well as creating and
          contributing to open source libraries. I share many of my projects to{' '}
          <TextLink href="https://github.com/nathsimpson" target="_blank">
            GitHub
          </TextLink>
          .
        </Text>

        <Text>I'm experienced with the following technologies...</Text>

        <Cluster
          as="ul"
          gap="small"
          align="center"
          margin="none"
          padding="none"
          css={{
            maxWidth: 600,
            listStyle: 'none'
          }}
        >
          {development_skills.map((item) => (
            <Tag label={item} as="li" key={item} />
          ))}
        </Cluster>
      </Stack>
    </div>
  );
};
