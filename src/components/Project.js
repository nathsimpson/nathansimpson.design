import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default class Project extends React.Component {

  render(){
      let projectData = this.props.data;
      let projectID = this.props.match.params.key-1;

      console.log(projectID);

      /**if (!projectData) {
        return <div>Sorry, but the project was not found</div>
      }*/
      return (
        <div className="project">
          <Link to={`/`}>Back</Link>
          <h1>{this.props.projects[projectID].projectName}</h1>
          <ReactMarkdown source={this.props.projects[projectID].markdown} />
        </div>
      )
    }
}
