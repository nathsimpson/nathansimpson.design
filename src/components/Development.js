/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Block } from './src/block';
import { Badge } from './src/badge';
import Card from './src/card';
import { colors, fontsizes } from '../theme';
import { mq } from '../helpers/utils';

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
    name: 'hex-alpha',
    openSource: true,
    link: 'https://github.com/nathsimpson/hex-alpha',
    type: 'Owner',
    desc:
      'A really simple package that enables you to specify an opacity for your HEX colours.',
    skills: ['JavaScript']
  },
  {
    name: 'ITCLearning Website',
    link: '/itc-learning',
    desc:
      'A WordPress-based website for a previous employer; Featuring a custom theme and registrations for webinars and events.',
    skills: ['SCSS', 'WordPress', 'PHP']
  }
];

const DevelopmentProject = ({ item }) => (
  <Card
    as="li"
    style={{
      listStyle: 'none',
      maxWidth: 600
    }}
  >
    <h4
      css={{
        marginTop: 0,
        marginBottom: 6
      }}
    >
      {item.name}
    </h4>
    <p
      css={{
        margin: '0px',
        marginBottom: 12,
        color: colors.foreground
      }}
      x
    >
      {item.desc}{' '}
      <a href={item.link} css={{}} target="_blank" rel="noopener noreferrer">
        Learn more
      </a>
    </p>
    <div
      css={{
        fontSize: fontsizes.xsmall,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      {item.team && (
        <Badge
          label="Team"
          size="small"
          color="purple"
          style={{ marginRight: 4, marginBottom: 4 }}
        />
      )}

      {item.openSource && (
        <Badge
          label="Open Source"
          size="small"
          color="green"
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
    </div>
  </Card>
);

export const Development = () => {
  return (
    <Block>
      <h2>Development</h2>

      <p>
        I love bringing concepts to life through code. Most of my time is spent
        building products for awesome clients, as well as creating and
        contributing to open source libraries. I share many of my projects to{' '}
        <a href="https://github.com/nathsimpson" target="_blank">
          GitHub
        </a>
        .
      </p>

      <p>I'm experienced with the following technologies...</p>

      <ul
        css={{
          maxWidth: 600,
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap'
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
      </ul>

      <h3>Some projects I've worked on...</h3>
      <ul
        css={mq({
          padding: 0,
          display: 'grid',
          gap: 12,
          gridTemplateColumns: ['1fr', 'repeat(auto-fit, minmax(350px, 1fr))']
        })}
      >
        {developmentProjects.map(item => (
          <DevelopmentProject item={item} key={item.name} />
        ))}
      </ul>
    </Block>
  );
};
