/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Tag } from '../../design-system/tag';
import { Cluster } from '../../design-system/cluster';
import { Stack } from '../../design-system/stack';

import { Heading, Text } from '../../design-system/typography';
import { TextLink } from '../../design-system/textlink';

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
          css={{
            maxWidth: 600,
            listStyle: 'none'
          }}
        >
          {development_skills.map(item => (
            <Tag
              label={item}
              as="li"
              key={item}
              style={{ marginRight: 6, marginBottom: 6 }}
            />
          ))}
        </Cluster>
      </Stack>
    </div>
  );
};
