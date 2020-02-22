import React from 'react';
import styled from '@emotion/styled';

const Tweet = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 3px;
  background: #444;
`;

export default class Twitter extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    // may need to implement axios
    fetch('https://api.jrvs.app/twitter')
      .then(response => response.json())
      .then(response => {
        this.setState({ tweets: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Tweets</h2>
        <div className="tweets">
          {this.state.tweets.map(({ id, text }) => (
            <Tweet key={id}>
              <span>{text}</span>
            </Tweet>
          ))}
        </div>
        <a
          style={{ textAlign: 'center', display: 'block' }}
          href="https://twitter.com/nathansimpson"
          target="_blank"
          rel="noopener noreferrer"
        >
          View more on Twitter
        </a>
      </div>
    );
  }
}
