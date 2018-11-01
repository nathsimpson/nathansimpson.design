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
    fetch("/test/dribbble.json")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ shots: responseData });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
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
