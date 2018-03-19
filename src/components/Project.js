import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

var input = '# This is a header\n\nAnd this is a paragraph'

export default class Project extends React.Component {
  render(){
    return(
      <div className="project">
        <p>Hi</p>
        <ReactMarkdown source={input} />
      </div>
    )
  }
}
