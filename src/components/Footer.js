import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/fontawesome-free-regular'
import { faTwitter, faInstagram, faCodepen, faLinkedin, faGithub, faReact, faDribbble, faYoutube } from '@fortawesome/fontawesome-free-brands'
import logo from '../logo.svg';

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
  },{
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/nathanjsimpson95/",
  },{
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/nathan-simpson-71512a75?trk",
  },{
    name: "Github",
    icon: faGithub,
    link: "https://github.com/nathansimpson95",
  },{
    name: "Codepen",
    icon: faCodepen,
    link: "https://codepen.io/nathansimpson/",
  },{
    name: "Dribbble",    
    icon: faDribbble,
    link: "https://dribbble.com/nathansimpson",
  },{
    name: "YouTube",    
    icon: faYoutube,
    link: "https://www.youtube.com/channel/UCa__hNMzVWIQOHErctX0leg",
  }
]



const Footer = () => (
  <footer className="aboutMe" style={{textAlign: "center"}}>
    <hr/>
    <ul style={{margin: '0.5em', fontSize:'1.5em', listStyle: 'none', padding: 0 }}>
      {networks.map(network =>
        <li style={{margin: '0 auto', display: 'inline-block', margin: '5px'}}>
          <SocialLink href={network.link} target="_blank">
            <FontAwesomeIcon icon={network.icon} />
          </SocialLink>
        </li>
      )}
    </ul>
    <div style={{marginBottom:'10px'}}>
    <span>Designed and Developed with </span><FontAwesomeIcon icon={faHeart} /><span> by </span><img src={logo} style={{height: '1em', position: 'relative', top: '2px'}}/><span> in </span><FontAwesomeIcon icon={faReact} />
    </div>
  </footer>
);

export default Footer;
