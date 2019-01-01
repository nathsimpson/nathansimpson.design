import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faCodepen,
  faLinkedin,
  faGithub,
  faDribbble,
  faYoutube
} from "@fortawesome/fontawesome-free-brands";
import logo from "../images/logo.svg";

const SocialLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: rgba(250, 109, 1, 1);
  }
`;

const networks = [
  {
    name: "Twitter",
    icon: faTwitter,
    link: "https://twitter.com/nathansimpson95"
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/nathansimpson.design"
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/nathan-simpson-71512a75?trk"
  },
  {
    name: "Github",
    icon: faGithub,
    link: "https://github.com/nathansimpsondesign"
  },
  {
    name: "Codepen",
    icon: faCodepen,
    link: "https://codepen.io/nathansimpson/"
  },
  {
    name: "Dribbble",
    icon: faDribbble,
    link: "https://dribbble.com/nathansimpson"
  },
  {
    name: "YouTube",
    icon: faYoutube,
    link: "https://www.youtube.com/channel/UCa__hNMzVWIQOHErctX0leg"
  }
];

const Footer = () => (
  <footer className="aboutMe" style={{ textAlign: "center" }}>
    <hr />
    <ul
      style={{
        margin: "0.5em",
        fontSize: "1em",
        listStyle: "none",
        padding: 0
      }}
    >
      {networks.map(network => (
        <li style={{ display: "inline-block", margin: "5px" }}>
          <SocialLink href={network.link} target="_blank">
            <FontAwesomeIcon icon={network.icon} />
          </SocialLink>
        </li>
      ))}
    </ul>
    <div style={{ marginBottom: "20px" }}>
      <img
        src={logo}
        style={{ height: "2em", position: "relative", top: "2px" }}
      />
      <p
        style={{
          fontSize: "0.6em",
          textTransform: "uppercase",
          letterSpacing: "1px",
          opacity: "0.4",
          marginTop: 10
        }}
      >
        &copy; Copyright 2019 Nathan Simpson. Made in Sydney Australia.
      </p>
    </div>
  </footer>
);

export default Footer;
