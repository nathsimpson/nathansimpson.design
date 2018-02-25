import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TreehouseBadges from './components/TreehouseBadges';
import {PortfolioFilter, PortfolioItem} from './components/Portfolio';

var portfolioInfo = {
  projects: [
    {
      key: 1,
      projectName : "Simmo's Offroad Tours",
      imagesrc : "wedding_cover.jpg",
      tags: ["brand", "ux", "dev"],
    },{
      key: 2,
      projectName : "ITC Learning Website",
      imagesrc : "wedding_cover.jpg",
      tags: ["ux", "dev"],
    },{
      key: 3,
      projectName : "LARA - Automated Administration Assistant",
      imagesrc : "wedding_cover.jpg",
      tags: ["dev"],
    },{
      key: 4,
      projectName : "AgriVita",
      imagesrc : "agrivita_cover.jpg",
      tags: ["ux", "brand"],
    },{
      key: 4,
      projectName : "Need A Nanny",
      imagesrc : "needANanny_cover.jpg",
      tags: ["ux", "brand"],
    },{
      key: 4,
      projectName : "Sydney Water Branding Concept",
      imagesrc : "agrivita_cover.jpg",
      tags: ["brand"],
    },{
      key: 5,
      projectName : "Nathan + Carrie Wedding",
      imagesrc : "wedding_cover.jpg",
      tags: ["more"],
    }
  ]
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = portfolioInfo;
  }
  render(){
    return(
      <div className="portfolio">
        <h2>Portfolio</h2>
        <PortfolioFilter/>
        <div className="portfolio_gallery">
        {this.state.projects.map(projectData =>
          <PortfolioItem data={projectData}/>
        )}

        <a href="#">More</a>
        </div>
      </div>
    )
  }
}


class AboutMe extends Component {
  render(){
    return(
      <div className="aboutMe">
        <h2>About Me</h2>
        <p></p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>

        <div className="row" id="intro">
          <div className="hero-half">
          </div>
          <div className="hero-half">
            <h1 style={{fontSize: '3em', fontWeight:500, lineHeight:'1em', margin: '10px 0px',}}>Hi I'm <br/><span style={{color:'#FA6D01'}}>Nathan Simpson</span></h1>
            <span>Designer and Frontend Developer from Sydney.</span>
          </div>
        </div>
        <hr/>
        <Portfolio/>
        <hr/>
        <TreehouseBadges/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default App;
