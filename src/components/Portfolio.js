import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from 'styled-components'

const PortfolioItemDiv = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 3px;
`;

const PortfolioItemImage = styled.img`
  filter: grayscale(100%);
  width: 100%;
  opacity: 0.4;
  transition: filter 1s, opacity 0.5s;

  ${PortfolioItemDiv}:hover & {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const PortfolioItemLabel = styled.span`
  display: none;
  position: absolute;
  bottom: 6px;
  font-size: 1.5em;
  line-height: 1.2em;
  color: white;
  font-weight: 700;
  z-index: 3;
  padding: 10px;

  ${PortfolioItemDiv}:hover & {
    display: block;
  }
`;

const PortfolioItemGradient = styled.span`

  ${PortfolioItemDiv}:hover & {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: none;
    background: -webkit-linear-gradient(rgba(37, 45, 52, 0), #000);
    background: -o-linear-gradient(rgba(37, 45, 52, 0), #000);
    background: -moz-linear-gradient(rgba(37, 45, 52, 0), #000);
    background: linear-gradient(rgba(37, 45, 52, 0), #000);
  }
`;

class PortfolioItem extends React.Component {
 render(){
   return(
      <PortfolioItemDiv>
        <PortfolioItemImage className="portfolio_item_image" src={"http://files.nathansimpson.design/portfolio/" + this.props.data.imagesrc} alt=""/>
        <PortfolioItemLabel className="portfolio_item_label">{this.props.data.projectName}</PortfolioItemLabel>
        <PortfolioItemGradient/>
      </PortfolioItemDiv>
    );
  }
}

export default class Portfolio extends React.Component {
  render(){
    return(
      <div className="portfolio" id="portfolio">
        <div style={{display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" }}>
          {this.props.projects.map(project =>
            <Link to={`/project/${project.key}`} key={project.key}>
              <PortfolioItem data={project}/>
            </Link>
          )}
        </div>
      </div>
    )
  }
}
