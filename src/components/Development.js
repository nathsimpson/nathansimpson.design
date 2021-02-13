/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Block } from './src/block';
import { Badge } from '../../design-system/badge';
import { Card } from '../../design-system/card';
import { Cluster } from '../../design-system/cluster';
import { Stack } from '../../design-system/stack';
import { mq } from '../helpers/utils';

import { Heading, Text } from '../../design-system/typography';

const skills = [
  'JavaScript',
  'TypeScript',
  'Design Systems',
  'React',
  'React Native',
  'NextJS',
  'Gatsby',
  'NodeJS',
  'Keystone',
  'Swift'
];

const developmentProjects = [
  {
    name: 'Reckon Payroll App and Web',
    link: 'https://www.reckon.com/au/payroll-app/',
    team: true,
    desc:
      'Enables small businesses to conveniently do Payroll and STP reporting from an browser or mobile device.',
    skills: ['TypeScript', 'React', 'React Native', 'GraphQL']
  },
  {
    name: 'KeystoneJS',
    link: 'https://github.com/keystonejs/keystone-5/graphs/contributors',
    type: 'Contributor',
    openSource: true,
    team: true,
    desc: 'KeystoneJS is a scalable platform and CMS for Node.js applications.',
    skills: ['NodeJS', 'React']
  },
  {
    name: 'The Garage',
    link: 'https://thegarageapp.com',
    type: 'Owner',
    desc: 'The Garage is an social network for car lovers in Sydney Australia.',
    skills: ['React Native', 'Keystone']
  },
  {
    name: 'IsobelJS',
    openSource: true,
    link: 'https://isobeljs.com/',
    type: 'Owner',
    desc:
      'A beginner-friendly NodeJS framework for fetching data from your social profiles and other sources, to display in your own apps and websites.',
    skills: ['NodeJS']
  },
  {
    name: 'ITCLearning Website',
    link: '/itc-learning',
    desc:
      'A WordPress-based website for a previous employer; Featuring a custom theme and registrations for webinars and events.',
    skills: ['SCSS', 'WordPress', 'PHP']
  },
  {
    name: 'nathansimpson.design',
    openSource: true,
    link: 'https://github.com/nathsimpson/nathansimpson.design',
    type: 'Owner',
    desc:
      'This website is one of my favourite side-projects. All of the code is available on GitHub for your enjoyment.',
    skills: ['TypeScript', 'Gatsby', 'Design Systems']
  }
];

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
      <Text>
        {item.desc}{' '}
        <a href={item.link} css={{}} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </Text>
      <Cluster gap="xsmall">
        {item.team && (
          <Badge
            label="Team"
            size="small"
            color="decorativePurple"
            style={{ marginRight: 4, marginBottom: 4 }}
          />
        )}

        {item.openSource && (
          <Badge
            label="Open Source"
            size="small"
            color="decorativeGreen"
            style={{ marginRight: 4, marginBottom: 4 }}
          />
        )}

        {item.skills.map(skill => (
          <Badge
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
        <a href="https://github.com/nathsimpson" target="_blank">
          GitHub
        </a>
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
        {skills.map(item => (
          <Badge
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
        {developmentProjects.map(item => (
          <DevelopmentProject item={item} key={item.name} />
        ))}
      </ul>
    </Stack>
  );
};
