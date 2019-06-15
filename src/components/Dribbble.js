import React from "react";

import { jsx, css } from "@emotion/core";

/** @jsx jsx */

export default class Dribbble extends React.Component {
  constructor() {
    super();
    this.state = {
      shots: []
    };
  }

  componentDidMount() {
    //may need to implement axios
    fetch("https://api.jrvs.app/get/dribbble")
      .then(response => response.json())
      .then(data => data.filter(shot => !shot.image.includes(".gif")))
      .then(data => data.splice(0, 8, ""))
      .then(data => {
        this.setState({ shots: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Work in Progress</h2>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gridColumnGap: 16,
            gridRowGap: 16
          }}
        >
          {this.state.shots.map(shot => (
            <a href={shot.link} target="_blank">
              <img
                className="shots_shot"
                src={shot.image}
                title={shot.description}
                alt={shot.description}
                style={{ width: "100%" }}
              />
            </a>
          ))}
        </div>
        <a
          style={{ textAlign: "center", display: "block" }}
          href="https://dribbble.com/nathansimpson"
          target="_blank"
        >
          View more on Dribbble
        </a>
      </div>
    );
  }
}
