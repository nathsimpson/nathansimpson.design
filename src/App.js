import React, { Component } from 'react';
import logo from './logo.svg';
import nathansnow from './nathansnow.jpg';
import './App.css';

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

class Header extends Component {
  render(){
    return(
      <header className="App-header">
        <img src={logo} style={{height:'60px'}} alt="Nathan Simpson" />
      </header>
    )
  }
}


class PortfolioFilter extends Component {
  render(){
    return(
      <div className="portfolio_filter">
        <ul className="portfolio_selector">
          <li>All</li>
          <li>UX</li>
          <li>Dev</li>
          <li>Brand</li>
          <li>More</li>
        </ul>
      </div>
    )
  }
}

class PortfolioItem extends Component{
  render(){
    return(
      <div className="portfolio_item">
        <img className="portfolio_item_image" src={"http://www.nsgd.com.au/portfolio/" + this.props.data.imagesrc} alt=""/>
         <span className="portfolio_item_label">{this.props.data.projectName}</span>
         <div className="portfolio_item_gradient"></div>
      </div>
    )
  }
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



class TreehouseBadges extends Component {
  constructor(){
    super();
    this.state = {
      badges: []
    };
  }

  componentDidMount(){
    //may need to implement axios
    fetch('https://teamtreehouse.com/nathansimpson.json')
      .then(response => response.json())
      .then(responseData=>{this.setState({badges: responseData.badges});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="badges">
        <h2>Treehouse Badges</h2>
        {this.state.badges.map(badge =>
          <img className="badges_badge" src={badge.icon_url} title={badge.name} alt={badge.name} style={{width:'60px',margin:'-17px 12px 0px 0px'}}/>
        )}
      </div>);
  }
}


class Footer extends Component {
  render(){
    return(
      <footer className="aboutMe">
        <ul>
          <li><a href="https://twitter.com/nathansimpson95" target="_blank">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/nathan-simpson-71512a75?trk" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/nathansimpson95" target="_blank">GitHub</a></li>
          <li><a href="https://codepen.io/nathansimpson/" target="_blank">CodePen</a></li>
        </ul>
        <span>Designed and Developed with heart by N in React</span>
      </footer>
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
            <h1>Hi I'm <span style={{color:'#FA6D01'}}>Nathan Simpson</span></h1>
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
