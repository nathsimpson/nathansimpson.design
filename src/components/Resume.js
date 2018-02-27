import React from 'react';

class Experience extends React.Component {
  render() {
    return(
      <section>
        <h2>Experience</h2>

        <div className="resume__item">
          <h3>eLearning Development, Training & Support</h3>
          <p>ITC Learning - Crows Nest NSW</p>
          <p>2016 - Present</p>
          <ul>
            <li>Working with project managers, clients and other designers throughout design projects</li>
            <li>Training clients in the use of specialised software</li>
            <li>Providing technical support for clients via phone and email</li>
            <li>Design, implementation and maintenance of a new website for the company</li>
          </ul>
        </div>

        <div className="resume__item">
          <h3>Freelance Graphic + Web Designer</h3>
          <p>2013 - Present</p>
          <ul>
            <li>Offering Logo Design, Web Design, Brochures and Posters</li>
            <li>Client relations skills</li>
            <li>Project Management</li>
            <li>Understanding of Client’s needs</li>
          </ul>
        </div>

        <div className="resume__item">
          <h3>Sales, Support & Training</h3>
          <p>Leading Edge Computers - Orange NSW</p>
          <p>2013 - 2015</p>
          <ul>
            <li>Customer relations skills</li>
            <li>Preparing marketing collateral across many mediums</li>
            <li>Assisted Technical team with duties</li>
          </ul>
        </div>
      </section>
    );
  }
}

class Education extends React.Component {
  render() {
    return(
      <section>
        <h2>Education</h2>

        <div className="resume__item">
          <h3>Bachelor of Design (Visual Communication)</h3>
          <p>Western Sydney University - Parramatta NSW</p>
          <p>2015 - 2018</p>
          <ul>
            <li>Working with project managers, clients and other designers throughout design projects</li>
            <li>Training clients in the use of specialised software</li>
            <li>Providing technical support for clients via phone and email</li>
            <li>Design, implementation and maintenance of a new website for the company</li>
          </ul>
        </div>

        <div className="resume__item">
          <h3>High School Certificate</h3>
          <p>Orange Christian School - Orange NSW</p>
          <p>2012 - 2013</p>
        </div>
      </section>
    );
  }
}


class Interests extends React.Component {
  render() {
    return(
      <section className="resume__item">
        <h2>Interests</h2>
        <ul>
          <li>Web & App Design</li>
          <li>Computers & Technology</li>
          <li>Flying Drones</li>
          <li>Skiing</li>
          <li>Watching Motorsport</li>
        </ul>
      </section>
    );
  }
}


class Skills extends React.Component {
  render() {
    return(
      <section className="resume__item">
        <h2>Skills</h2>
        <ul>
          <li>Adobe Photoshop & Illustrator</li>
          <li>Adobe XD</li>
          <li>Adobe Animate & After Effects</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Swift</li>
          <li>macOS & Windows</li>
          <li>Microsoft Office</li>
        </ul>
      </section>
    );
  }
}

class Volunteer extends React.Component {
  render() {
    return(
      <section className="resume__item">
        <h2>Skills</h2>
        <h3>Service Host and Kids Church</h3>
        Elevation Church Penrith
        2016 - Present
        <h3>Volunteer</h3>
        NSW State Emergency Service Orange
        2014 - 2015
      </section>
    );
  }
}



export default class Resume extends React.Component {
  render() {
    return(
      <div>
        <h1>Resume</h1>

        <h2>Career Objectives</h2>
        <p>Bachelor of Design graduate seeking an entry level role in Web and Application Design, with the opportunity to further my interests in development. I can offer strong visual design and computer skills with a sound knowledge in HTML, CSS, JavaScript and Swift.</p>
        <div style={{width:'60%'}}>
          <Experience/>
          <Education/>
        </div>
        <div style={{width:'40%'}}>
          <Interests/>
          <Skills/>
          <Volunteer/>
        </div>
      </div>
    );
  }
}
