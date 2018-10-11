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

//require('./style.scss');

var portfolioData = [
    {
      key: 1,
      projectName : "ITC Learning Website",
      imagesrc : "itc_cover.jpg",
      tags: ["ux", "dev"],
      markdown: 'ITC Learning is an eLearning Consultancy in North Sydney, comprised of 15 people. I started working at ITC Learning as a junior eLearning Developer, but my experience in web development quickly gave me the reputation of “the web guy”. After months of planning and pitching to the technology manager, I eventually convinced him that I should rebuild the company website, replacing the existing site that was built in an eLearning software and was difficult to maintain and expand.\n\nWe built the site on Wordpress, as I wasn’t the only one that would maintain the site. We also installed a ‘page builder’ plugin to allow other team members to make changes. The site has a custom theme, based on Bootstrap CSS. My skills in development allowed me to create custom plugins to handle registrations for webinars and events, using various APIs.\n\n![ITC Learning Website](http://files.nathansimpson.design/portfolio/itc/1.jpg "ITC Learning Website")\n\n![ITC Learning Website](http://files.nathansimpson.design/portfolio/itc/2.jpg "ITC Learning Website")',
      mdFileName: "simple.md"
    },{
      key: 2,
      projectName : "Simmo's Offroad Tours",
      imagesrc : "simmo/cover.jpg",
      tags: ["brand", "ux", "dev"],
      markdown: 'Simmos Offroad Tours is 4WD Tourism Company in Orange NSW, providing winery tours, scenic 4wd tours and camping holidays in the central west of New South Wales.\n\nThe logo was designed when I was starting to take an interest in graphic design. The logo was made in Microsoft Office Publisher originally, but was later reconstructed in Adobe Illustrator, once I was confident in graphic design.\n\nOver the years, I have designed everything from the logo, to flyers, to a custom Wordpress website.\n\n![Logo](http://files.nathansimpson.design/portfolio/simmo/logo.jpg "Logo")\n\n![Website](http://files.nathansimpson.design/portfolio/simmo/web.png "Website")\n\n![Flyer](http://files.nathansimpson.design/portfolio/simmo/flyer.png "Flyer")\n\n![Vehicle wrap - process](http://files.nathansimpson.design/portfolio/simmo/wrap_process.jpg "Vehicle wrap - process")\n\n![alt text](http://files.nathansimpson.design/portfolio/simmo/wrap_final.png "Vehicle wrap - Final")\n\n![Vehicle wrap - Front](http://files.nathansimpson.design/portfolio/simmo/wrap_front.jpg "Vehicle wrap - Front")\n\n![Vehicle wrap - Rear](http://files.nathansimpson.design/portfolio/simmo/wrap_back.jpg "Vehicle wrap - Rear")'
    },{
      key: 3,
      projectName : "LARA - Automated Administration Assistant",
      imagesrc : "lara_cover.jpg",
      tags: ["dev"],
      markdown: 'Throughout my time in ITC Learning, I have completely redeveloped their website, and became their resident JavaScript and PHP expert. When the Managing Director expressed interest in an ‘ecommerce platform’, it became apparent that what was really needed was a system that could automate the yearly renewal process for the software licences we sold. Due to the systems we use internally, it was apparent that this would need to be custom software.\n\nLARA, or Licence and Renewals assistant, is comprised of two parts. The worker and the admin area.\n\nThe worker is a script that runs every day, that makes an API call to the CRM to see if there are any licences that are 90 days from expiry. If there are, LARA will commit that to her database and send automated reminder emails to the client every 30 days. The client can then click a link in the email to be taken to a payment gateway where the transaction can be processed. LARA will then send a thank you email and invoice.\n\nThe admin area allows a team member of ITC Learning to login with their Office 365 ID, to see the status of the renewals in progress and make changes to the system.\n\nThis project was my first major software development project, and allowed me to learn more about API calls, environment variables and more benefits of using Git.\n\n![LARA](http://files.nathansimpson.design/portfolio/lara/hero.png)'
    },{
      key: 4,
      projectName : "AgriVita",
      imagesrc : "agrivita/cover.jpg",
      tags: ["ux", "brand"],
      markdown: 'AgriVita is an iPhone Application designed to help Australian backyard-gardeners take care of their plants and animals.\n\nAdd your plants for growth and water tracking, organise them into plots, and receive reminders to water them as well as suggestions for fertilisation, weeding, or protecting them from birds or insects.\n\nAdd your animals such as pigs or chickens, and track their weight, ancestry, pregnancy, and sale history.\n\nThe app also offers a marketplace for bartering with other local farmers, and integration with AquaVita Smart irrigation products. These products will water your plants on a schedule, which will adjust depending on weather conditions, to save you water. Watering information is available at a glance, so you can compare rainfall readings alongside your irrigation system’s output.\n\n![Agrivita Logo](http://files.nathansimpson.design/portfolio/agrivita/logo.jpg "Agrivita Logo")\n\n![Agrivita App](http://files.nathansimpson.design/portfolio/agrivita/abstract.jpg "Agrivita App")\n\n![alt text](http://files.nathansimpson.design/portfolio/agrivita/threeup.png "Agrivita App")\n\n[View Interactive Prototype](https://xd.adobe.com/view/30072277-e7ee-4fdd-a211-ac225ed8df57/)'
    },{
      key: 5,
      projectName : "Need A Nanny",
      imagesrc : "needananny/cover.jpg",
      tags: ["ux", "brand"],
      markdown: 'With Need a Nanny, the nights off that parents desperately need are just a couple of taps away. Need a Nanny makes it simple to request a Nanny, and allows parents to rest at ease knowing that their children are in the care of a true professional.\n\nThe Need a Nanny app makes this possible, thanks to it’s interface that puts an emphasis on convenience and speed, ensuring that those moments that parents have off of their feet aren’t spent tapping through confusing menus.\n\n![Need a Nanny App](http://files.nathansimpson.design/portfolio/needananny/abstract.jpg "Need A Nanny App")\n\nNeed a Nanny is a fictional application that I conceptualised in my App Design class at University. It allows busy Sydney Mums to book a professional Nanny safely and conveniently through the app. The screens were designed in Adobe XD and the prototype was made in Marvel for submission.\n\n[View Interactive Prototype](https://xd.adobe.com/view/f57f9d0e-bf8b-447f-bb82-930fc3d6bc77/)'
    },{
      key: 6,
      projectName : "John Emmanuel Floral Design",
      imagesrc : "john_emmanuel/johnemmanuel_cover.jpg",
      tags: ["ux", "dev"],
      markdown: 'Wordpress website design for luxury event floral designer.\n\n![Home Page](http://files.nathansimpson.design/portfolio/john_emmanuel/1.jpg "Home Page")\n\n![About Us](http://files.nathansimpson.design/portfolio/john_emmanuel/2.jpg "About Page")'
    },{
      key: 7,
      projectName : "Nathan + Carrie Wedding",
      imagesrc : "wedding/cover.jpg",
      tags: ["more"],
      markdown: 'For my wedding in February 2016, I designed the invitations, place cards, order of service brochures and event website, around a unified visual theme that matched the garden wedding ceremony with vintage touches.\n\n![Image 1](http://files.nathansimpson.design/portfolio/wedding/img1.jpg "Image 1")\n\n![Image 2](http://files.nathansimpson.design/portfolio/wedding/img2.png "Image 2")\n\n![Image 3](http://files.nathansimpson.design/portfolio/wedding/img3.jpg "Image 3")\n\n![Image 4](http://files.nathansimpson.design/portfolio/wedding/img4.jpg "Image 4")\n\n![Image 5](http://files.nathansimpson.design/portfolio/wedding/img5.jpg "Image 5")'
    },{
      key: 8,
      projectName : "Aussie Fire Trucks",
      imagesrc : "aussiefiretrucks_cover.jpg",
      tags: ["dev"],
      markdown: '[Aussie Fire Trucks](http://www.aussiefiretrucks.com) was my first custom development project. After spending a couple years working in HTML & CSS, as well as Wordpress, I wanted to build something myself and further explore some of the development technologies I had picked up. My Wordpress experience taught me a little about MySQL and PHP, so using what little skills I had, and a lot of Googling, I was able to build a very simple search engine from scratch.\n\nWhen I was a kid, I wanted to be a firefighter, and drive the big red Fire Engines. Even today I am in awe when I see them drive past with the lights and sirens on, and I was inspired to join the State Emergency Service. Joining a Facebook community of ‘Fire Engine Spotters’ gave me the inspiration to build an app where you could search for a specific Fire Engine, and find out more information about it, such as it’s station history, and it’s unique fleet number. Although I am not actively working on this app, I am making the code open on GitHub so anyone can pick it apart and make their own basic search engine.\n\n![Aussie Fire Trucks](http://files.nathansimpson.design/portfolio/aussiefiretrucks_hero.png "Aussie Fire Trucks")'
    },{
      key: 9,
      projectName : "Logos",
      imagesrc : "logoDesign_cover.jpg",
      tags: ["more"],
      markdown: '![Jayden Ojeda Motorsport](http://files.nathansimpson.design/portfolio/logos/1.jpg "Jayden Ojeda Motorsport")\n\n![Broadhead Tactical](http://files.nathansimpson.design/portfolio/logos/2.jpg "Broadhead Tactical")\n\n![GoLeft Action Sports](http://files.nathansimpson.design/portfolio/logos/3.jpg "GoLeft Action Sports")\n\n![Better Books and BAS](http://files.nathansimpson.design/portfolio/logos/4.jpg "Better Books and BAS")\n\n![Orange Post Local News Network](http://files.nathansimpson.design/portfolio/logos/5.jpg "Orange Post Local News Network")\n\n![Simmos Offroad Tours](http://files.nathansimpson.design/portfolio/logos/6.jpg "Simmos Offroad Tours")\n\n![POK Holdings](http://files.nathansimpson.design/portfolio/logos/7.jpg "POK Holdings")\n\n![Action Photos and Framing](http://files.nathansimpson.design/portfolio/logos/8.jpg "Action Photos and Framing")\n\n![Reconcile School Accounting](http://files.nathansimpson.design/portfolio/logos/9.jpg "Reconcile School Accounting")\n\n![All Ways Bricklaying](http://files.nathansimpson.design/portfolio/logos/10.jpg "All Ways Bricklaying")\n\n![Eden Garden and Rural](http://files.nathansimpson.design/portfolio/logos/11.jpg "Eden Garden and Rural")\n\n![Western Sydney Racing](http://files.nathansimpson.design/portfolio/logos/12.jpg "Western Sydney Racing")'
    }
]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolioData: portfolioData,
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
          <Route path="#portfolio" render={()=><Home projects={this.state.portfolioData}/>} />
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
