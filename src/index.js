import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Project from './components/Project';
import NotFound from './components/NotFound';

require('./style.scss');

var portfolioInfo = [
    {
      key: 1,
      projectName : "ITC Learning Website",
      imagesrc : "itc_cover.jpg",
      tags: ["ux", "dev"],
      markdown: '# This is a header\n\nAnd this is a paragraph',
      mdFileName: "simple.md"
    },{
      key: 2,
      projectName : "Simmo's Offroad Tours",
      imagesrc : "simmo_cover.jpg",
      tags: ["brand", "ux", "dev"],
      markdown: "Simmo's Offroad Tours is 4WD Tourism Company in Orange NSW, providing winery tours, scenic 4wd tours and camping holidays in the central west of New South Wales.\n\nThe logo was designed when I was starting to take an interest in graphic design. The logo was made in Microsoft Office Publisher originally, but was later reconstructed in Adobe Illustrator, once I was confident in graphic design.\n\nOver the years, I have designed everything from the logo, to flyers, to a custom Wordpress website."
    },{
      key: 3,
      projectName : "LARA - Automated Administration Assistant",
      imagesrc : "lara_cover.jpg",
      tags: ["dev"],
      markdown: '![alt text](http://files.nathansimpson.design/portfolio/lara/hero.png "LARA")\n\nThis is a paragraph'
    },{
      key: 4,
      projectName : "AgriVita",
      imagesrc : "agrivita_cover.jpg",
      tags: ["ux", "brand"],
      markdown: 'AgriVita is an iPhone Application designed to help Australian backyard-gardeners take care of their plants and animals.\n\nAdd your plants for growth and water tracking, organise them into plots, and receive reminders to water them as well as suggestions for fertilisation, weeding, or protecting them from birds or insects.\n\nAdd your animals such as pigs or chickens, and track their weight, ancestry, pregnancy, and sale history.\n\nThe app also offers a marketplace for bartering with other local farmers, and integration with AquaVita Smart irrigation products. These products will water your plants on a schedule, which will adjust depending on weather conditions, to save you water. Watering information is available at a glance, so you can compare rainfall readings alongside your irrigation system’s output.'
    },{
      key: 5,
      projectName : "Need A Nanny",
      imagesrc : "needANanny_cover.jpg",
      tags: ["ux", "brand"],
      markdown: '# This is a header\n\nAnd this is a paragraph'
    },{
      key: 6,
      projectName : "John Emmanuel Floral Design",
      imagesrc : "john_emmanuel/johnemmanuel_cover.jpg",
      tags: ["ux", "dev"],
      markdown: '# This is a header\n\nAnd this is a paragraph'
    },{
      key: 7,
      projectName : "Nathan + Carrie Wedding",
      imagesrc : "wedding/cover.jpg",
      tags: ["more"],
      markdown: 'For my wedding in February 2016, I designed the invitations, place cards, order of service brochures and event website, around a unified visual theme that matched the garden wedding ceremony with vintage touches.\n\n![alt text](http://files.nathansimpson.design/portfolio/wedding/img1.jpg "Car 1")\n\n![alt text](http://files.nathansimpson.design/portfolio/wedding/img2.png "Car 1")\n\n![alt text](http://files.nathansimpson.design/portfolio/wedding/img3.jpg "Car 1")\n\n![alt text](http://files.nathansimpson.design/portfolio/wedding/img4.jpg "Car 1")\n\n![alt text](http://files.nathansimpson.design/portfolio/wedding/img5.jpg "Car 1")'
    },{
      key: 8,
      projectName : "Aussie Fire Trucks",
      imagesrc : "aussiefiretrucks_cover.jpg",
      tags: ["dev"],
      markdown: '# This is a header\n\nAnd this is a paragraph'
    },{
      key: 9,
      projectName : "V8 Supercars Livery Designs",
      imagesrc : "supercars/supercars_cover.jpg",
      tags: ["more"],
      markdown: '![alt text](http://files.nathansimpson.design/portfolio/supercars/car1.png "Car 1")'
    }
]


class App extends React.Component {
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
          <Route path="/" exact render={()=><Home projects={this.state.portfolioData}/>} />
          <Route path="/portfolio" render={()=><Portfolio projects={this.state.portfolioData}/>} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/project/:key" render={(props)=> <Project {...props} projects={this.state.portfolioData}/>} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));
