import React from 'react';

class Hero extends React.Component {
  render(){
    return(
      <div className="projectHero">
        <div className="projectHero_text">
          <h1>Project Name</h1>
          <p>Project, Tags</p>
        </div>

        <div className="projectHero_image" style={{background: 'red'}}>
        </div>
      </div>
    )
  }
}

class ProjectText extends React.Component {
  render(){
    return(
      <div className="projectText">
        <hr/>
        //map through content blocks in state
        <div className="projecText_block">
          <h2>Block Title</h2>
          <p>Block Title</p>
        </div>
        <hr/>
      </div>
    )
  }
}

export default class Project extends React.Component {
  render(){
    return(
      <div className="project">
        <Hero name="name" tags="tags"/>
        <ProjectText/>
        <img src="X"/>
      </div>
    )
  }
}
