import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';


var portfolioInfo = [
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


class App extends Component {
  constructor() {
    super();
    this.state = {
      portfolioData: portfolioInfo,
      filterString: '',
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Header/>
        <Route exact path="/" render={()=><Home projects={this.state.portfolioData}/>} />
        <Route path="/portfolio" render={()=><Portfolio projects={this.state.portfolioData}/>} />
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
