/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

import { Stack } from '@nathsimpson/box';
import { Heading, Text } from '@nathsimpson/typography';
import { TextLink } from '@nathsimpson/text-link';

export class Dribbble extends React.Component {
  constructor() {
    super();
    this.state = {
      shots: []
    };
  }

  componentDidMount() {
    // may need to implement axios
    fetch('/.netlify/functions/getDribbbleShots')
      .then((response) => response.json())
      .then((data) => data.filter((shot) => !shot.image.includes('.gif')))
      .then((data) => data.splice(0, 4, ''))
      .then((data) => {
        this.setState({ shots: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Stack gap="medium" css={{ width: '100%' }}>
        <Heading level={2}>Other work</Heading>

        <Text>
          I occasionally post WIP designs on my{' '}
          <TextLink
            href="https://dribbble.com/nathansimpson"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </TextLink>{' '}
          page.
        </Text>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gridColumnGap: 16,
            gridRowGap: 16,
            width: '100%'
          }}
        >
          {this.state.shots.map(({ id, link, image, description }) => (
            <a href={link} key={id} target="_blank" rel="noopener noreferrer">
              <img
                className="shots_shot"
                src={image}
                title={description}
                alt={description}
                css={{ width: '100%' }}
              />
            </a>
          ))}
        </div>
      </Stack>
    );
  }
}
