/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Tag } from '../../design-system/tag';
import { Card } from '../../design-system/card';
import { Cluster } from '../../design-system/cluster';
import { Stack } from '../../design-system/stack';
import { mq } from '../helpers/utils';

import { Heading, Text } from '../../design-system/typography';
import { TextLink } from '../../design-system/textlink';

import { development_projects, development_skills } from '../data';

const DevelopmentProject = ({ item }) => (
  <Card
    as="li"
    style={{
      listStyle: 'none',
      maxWidth: 600,
      textAlign: 'left'
    }}
  >
    <Stack gap="small">
      <Heading level={4}>{item.name}</Heading>
      <Text size="small">
        {item.desc}{' '}
        <TextLink href={item.link} target="_blank" rel="noopener noreferrer">
          Learn more
        </TextLink>
      </Text>
      <Cluster gap="xsmall">
        {item.team && (
          <Tag
            label="Team"
            size="small"
            color="purple"
            style={{ marginRight: 4, marginBottom: 4 }}
          />
        )}

        {item.openSource && (
          <Tag
            label="Open Source"
            size="small"
            color="green"
            style={{ marginRight: 4, marginBottom: 4 }}
          />
        )}

        {item.skills.map(skill => (
          <Tag
            label={skill}
            size="small"
            style={{ marginRight: 4, marginBottom: 4 }}
            key={skill}
          />
        ))}
      </Cluster>
    </Stack>
  </Card>
);

export const Development = () => {
  return (
    <Stack
      gap="medium"
      align="center"
      css={{ textAlign: 'center', width: '100%' }}
    >
      <Heading level={2}>Development</Heading>

      <Text>
        I love bringing concepts to life through code. Most of my time is spent
        building products for awesome clients, as well as creating and
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

      <Heading level={3}>Some projects I've worked on...</Heading>

      <ul
        css={mq({
          padding: 0,
          display: 'grid',
          width: '100%',
          gap: 12,
          gridTemplateColumns: ['1fr', 'repeat(auto-fit, minmax(350px, 1fr))']
        })}
      >
        {development_projects.map(item => (
          <DevelopmentProject item={item} key={item.name} />
        ))}
      </ul>
    </Stack>
  );
};
