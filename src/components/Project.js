import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default class Project extends React.Component {

  render(){
      const projects = this.props.projects;
      const projectID = this.props.match.params.slug;

      var projectData;

      for(var i = 0; i < projects.length; i++) {
          if (projects[i].slug == projectID) {
            projectData = projects[i];
              break;
          }
      }

      return (
        <div className="project">
          <Link to={`/`}>Back</Link>
          <h1>{projectData.projectName}</h1>
          <ReactMarkdown source={projectData.markdown} />
        </div>
      )
    }
}
