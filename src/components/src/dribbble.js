/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

export default class Dribbble extends React.Component {
  constructor() {
    super();
    this.state = {
      shots: []
    };
  }

  componentDidMount() {
    // may need to implement axios
    fetch('/.netlify/functions/getDribbbleShots')
      .then(response => response.json())
      .then(data => data.filter(shot => !shot.image.includes('.gif')))
      .then(data => data.splice(0, 4, ''))
      .then(data => {
        this.setState({ shots: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3 css={{ marginBottom: 0 }}>Other work</h3>
        <p css={{ marginBottom: 26 }}>
          I occasionally post WIP designs on my{' '}
          <a
            href="https://dribbble.com/nathansimpson"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>{' '}
          page.
        </p>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gridColumnGap: 16,
            gridRowGap: 16
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
      </div>
    );
  }
}
