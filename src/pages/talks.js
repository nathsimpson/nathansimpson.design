/** @jsx jsx */
import { Layout } from '../components';
import { jsx } from '@emotion/core';

import { getBreakpoints } from '../helpers/utils';

const mq = getBreakpoints();

const talks = [
  {
    id: 'OQbF8Mx4iso',
    name: 'Manipulating colour in JavaScript',
    desc:
      'Colours in Web Development are an interesting space; there are multiple formats for representing colours, and manipulating them to create new colours. In this talk, Nathan will discuss his experiment building a JavaScript app that manipulates colours to create new shades, and what he learnt about colours and algorithms along the way.'
  },
  {
    id: 'Tmi4YbR_4TY',
    name: 'About GitHub Package Manager',
    desc:
      'In this talk at the Thinkmill office, Nathan gives an overview of GitHub Package Manager. What is it? What does it mean for JavaScript developers? How is it different to NPM? All will be revealed.'
  },
  {
    id: '8D_bwTpDTTs',
    name: 'How I prototyped a social network with Keystone 5',
    desc:
      'At the May 2019 SydJS meetup, Thinkmill unveiled Keystone 5 with a line-up of talks. In this talk, I show off how I am building The Garage, a social network for car lovers, using Keystone 5 and React Native.'
  }
];

export default () => (
  <Layout>
    <h1>Talks</h1>
    <p>
      Occasionally I give talks at{' '}
      <a href="https://www.sydjs.com/" target="_blank">
        SydJS
      </a>
      {' and '}
      <a href="https://www.meetup.com/en-AU/React-Sydney/" target="_blank">
        React Sydney
      </a>{' '}
      meetups. Check out the recordings below, and come and say hi at the next
      one!
    </p>
    {talks.map(talk => (
      <Video talk={talk} key={talk.id} />
    ))}
  </Layout>
);

const Video = ({ talk }) => (
  <div
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: '70px 0'
    }}
  >
    <iframe
      width="100%"
      height="450"
      css={{
        boxSizing: 'border-box',
        paddingRight: 16,
        width: '100%',
        [mq[1]]: {
          width: '50%'
        },
        [mq[2]]: {
          width: '60%'
        }
      }}
      src={`https://www.youtube.com/embed/${talk.id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <div
      css={{
        width: '100%',
        [mq[1]]: {
          width: '50%'
        },
        [mq[2]]: {
          width: '40%'
        }
      }}
    >
      <h2>{talk.name}</h2>
      <p>{talk.desc}</p>
    </div>
  </div>
);
