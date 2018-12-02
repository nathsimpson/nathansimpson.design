import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

export default class Project2 extends React.Component {

  render(){
      return (
        <div className="project">
          <Link to={`/`}>Back</Link>
          <h1>Hi</h1>
          <Markdown>## Hi Nathan</Markdown>
          <Markdown>{this.props.content}</Markdown>
        </div>
      )
    }
}