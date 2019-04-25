import React from "react";

export default class Dribbble extends React.Component {
  constructor() {
    super();
    this.state = {
      shots: []
    };
  }

  componentDidMount() {
    //may need to implement axios
    fetch("https://api.jrvs.app/dribbble")
      .then(response => response.json())
      .then(data => data.filter(shot => !shot.image.includes(".gif")))
      .then(data => data.splice(0, 6, ""))
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
        <div className="shots">
          {this.state.shots.map(shot => (
            <a href={shot.link} target="_blank">
              <img
                className="shots_shot"
                src={shot.image}
                title={shot.description}
                alt={shot.description}
                style={{ width: "300px", margin: "10px" }}
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
