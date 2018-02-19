import React, { Component } from 'react';
import logo from './logo.svg';
import nathansnow from './nathansnow.jpg';
import './App.css';

var portfolioInfo = {
  projects: [
    {
      projectName : "Simmo's Offroad Tours",
      imagesrc : "nathansnow.jpg",
      tags: ["brand", "ux", "dev"],
    },{
      projectName : "ITC Learning Website",
      imagesrc : "nathansnow.jpg",
      tags: ["ux", "dev"],
    },{
      projectName : "LARA - Automated Administration Assistant",
      imagesrc : "nathansnow.jpg",
      tags: ["dev"],
    },{
      projectName : "AgriVita",
      imagesrc : "nathansnow.jpg",
      tags: ["ux", "brand"],
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
        </ul>
      </div>
    )
  }
}

class PortfolioItem extends Component{
  render(){
    return(
      <div className="portfolio_item">
        <img className="portfolio_item_image" src={"http://www.nsgd.com.au/" + this.props.data.imagesrc} alt=""/>
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
        {this.state.projects.map(projectData =>
          <PortfolioItem data={projectData}/>
        )}
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
            <h1>Hi I'm <span style={{color:'#FA6D01'}}>Nathan Simpson</span></h1>
            <span>Designer and Frontend Developer from Sydney.</span>
          </div>
        </div>
        <hr/>
        <PortfolioFilter/>
        <Portfolio/>
        <hr/>

      </div>
    );
  }
}

export default App;
