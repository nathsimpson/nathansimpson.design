import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-regular'
import { faTwitter, faInstagram, faCodepen, faLinkedin, faGithub, faReact, faDribbble, faYoutube } from '@fortawesome/fontawesome-free-brands'
import logo from '../logo.svg';

const Footer = () => (
  <footer className="aboutMe">
    <hr/>
    <ul style={{margin: '0.5em', fontSize:'2em'}}>
      <li><a href="https://twitter.com/nathansimpson95" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li>
      <li><a href="https://www.instagram.com/nathanjsimpson95/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
      <li><a href="https://www.linkedin.com/in/nathan-simpson-71512a75?trk" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      <li><a href="https://github.com/nathansimpson95" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
      <li><a href="https://codepen.io/nathansimpson/" target="_blank"><FontAwesomeIcon icon={faCodepen} /></a></li>
      <li><a href="https://dribbble.com/nathansimpson" target="_blank"><FontAwesomeIcon icon={faDribbble} /></a></li>
      <li><a href="https://www.youtube.com/channel/UCa__hNMzVWIQOHErctX0leg" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
    </ul>
    <FontAwesomeIcon icon="Heart"/>
    <div style={{marginBottom:'10px'}}>
    <span>Designed and Developed with </span><FontAwesomeIcon icon={faHeart} /><span> by </span><img src={logo} style={{height: '1em'}}/><span> in </span><FontAwesomeIcon icon={faReact} />
    </div>
  </footer>
);

export default Footer;
