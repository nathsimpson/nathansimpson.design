import React, { Component } from 'react';
import logo from './logo.svg';
import nathansnow from './nathansnow.jpg';
import './App.css';


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


class Portfolio extends Component {
  render(){
    return(
      <div className="portfolio">

        <div className="portfolio_item">
          <img className="portfolio_item_image" src="http://www.nsgd.com.au/nathansnow.jpg" alt=""/>
	         <span className="portfolio_item_label">Simmo's Offroad Tours Website Design</span>
	         <div className="portfolio_item_gradient"></div>
        </div>

        <div className="portfolio_item">
          <img className="portfolio_item_image" src="http://www.nsgd.com.au/nathansnow.jpg" alt=""/>
           <span className="portfolio_item_label">Simmo's Offroad Tours Website Design</span>
           <div className="portfolio_item_gradient"></div>
        </div>

        <div className="portfolio_item">
          <img className="portfolio_item_image" src="http://www.nsgd.com.au/nathansnow.jpg" alt=""/>
           <span className="portfolio_item_label">Simmo's Offroad Tours Website Design</span>
           <div className="portfolio_item_gradient"></div>
        </div>

        <div className="portfolio_item">
          <img className="portfolio_item_image" src="http://www.nsgd.com.au/nathansnow.jpg" alt=""/>
           <span className="portfolio_item_label">Simmo's Offroad Tours Website Design</span>
           <div className="portfolio_item_gradient"></div>
        </div>

        <div className="portfolio_item">
          <img className="portfolio_item_image" src="http://www.nsgd.com.au/nathansnow.jpg" alt=""/>
           <span className="portfolio_item_label">Simmo's Offroad Tours Website Design</span>
           <div className="portfolio_item_gradient"></div>
        </div>

        <div className="portfolio_item">
          <img className="portfolio_item_image" src="http://www.nsgd.com.au/nathansnow.jpg" alt=""/>
           <span className="portfolio_item_label">Simmo's Offroad Tours Website Design</span>
           <div className="portfolio_item_gradient"></div>
        </div>




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
