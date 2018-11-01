import React from "react";
//import TreehouseBadges from "./TreehouseBadges";
import Portfolio from "./Portfolio";
import Bio from "./Bio";
import ContactForm from "./ContactForm";
import Dribbble from "./Dribbble";
import { Route, Redirect } from "react-router";
import { Link, NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <main>
        <div id="intro"
        //style={{ textAlign: "center", margin: "80px" }}
        >
          <h1
            style={{
              lineHeight: "1em",
              margin: "10px 0px"
            }}
          >
            NATHAN SIMPSON
          </h1>
          <p>I am a UX Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype.</p>
        </div>
        <hr />
        <Portfolio projects={this.props.projects} limit={7} />
        <hr />
        <Bio />
        <hr />
        <Dribbble />
        <hr />
        <ContactForm />
      </main>
    );
  }
}

export default Home;
