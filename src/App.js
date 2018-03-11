import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import NotFound from './components/NotFound';


var portfolioInfo = [
{
      key: 1,
      projectName : "ITC Learning Website",
      imagesrc : "itc_cover.jpg",
      tags: ["ux", "dev"],
    },{
      key: 2,
      projectName : "Simmo's Offroad Tours",
      imagesrc : "simmo_cover.jpg",
      tags: ["brand", "ux", "dev"],
    },{
      key: 3,
      projectName : "LARA - Automated Administration Assistant",
      imagesrc : "lara_cover.jpg",
      tags: ["dev"],
    },{
      key: 4,
      projectName : "AgriVita",
      imagesrc : "agrivita_cover.jpg",
      tags: ["ux", "brand"],
    },{
      key: 5,
      projectName : "Need A Nanny",
      imagesrc : "needANanny_cover.jpg",
      tags: ["ux", "brand"],
    },{
      key: 6,
      projectName : "John Emmanuel Floral Design",
      imagesrc : "john_emmanuel/johnemmanuel_cover.jpg",
      tags: ["ux", "dev"],
    },{
      key: 7,
      projectName : "Sydney Water Branding Concept",
      imagesrc : "sydney_water_cover.jpg",
      tags: ["brand"],
    },{
      key: 8,
      projectName : "Nathan + Carrie Wedding",
      imagesrc : "wedding_cover.jpg",
      tags: ["more"],
    },{
      key: 9,
      projectName : "Aussie Fire Trucks",
      imagesrc : "aussiefiretrucks_cover.jpg",
      tags: ["dev"],
    },{
      key: 10,
      projectName : "Sydney Transport Futures",
      imagesrc : "aussiefiretrucks_cover.jpg",
      tags: ["ux","dev"],
    },{
      key: 11,
      projectName : "V8 Supercars Livery Designs",
      imagesrc : "supercars/supercars_cover.jpg",
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
        <Switch>
          <Route exact path="/" render={()=><Home projects={this.state.portfolioData}/>} />
          <Route path="/portfolio" render={()=><Portfolio projects={this.state.portfolioData}/>} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
