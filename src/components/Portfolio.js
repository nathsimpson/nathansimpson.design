import React from 'react';

let portfolioSelectorStyles = {textAlign: 'center', padding: '3px'}
let portfolioSelectorItemStyles = {listStyle: 'none', display: 'inline-block', margin: '3px'}


export class PortfolioFilter extends React.Component {
 render(){
   return(
     <div className="portfolio_filter">
       <ul className="portfolio_selector" style={portfolioSelectorStyles}>
         <li style={portfolioSelectorItemStyles}>All</li>
         <li style={portfolioSelectorItemStyles}>UX</li>
         <li style={portfolioSelectorItemStyles}>Dev</li>
         <li style={portfolioSelectorItemStyles}>Brand</li>
         <li style={portfolioSelectorItemStyles}>More</li>
       </ul>
     </div>
   );
 }
}


export class PortfolioItem extends React.Component {
 render(){
   return(
     <div className="portfolio_item">
       <img className="portfolio_item_image" src={"http://files.nathansimpson.design/portfolio/" + this.props.data.imagesrc} alt=""/>
        <span className="portfolio_item_label">{this.props.data.projectName}</span>
        <div className="portfolio_item_gradient"></div>
     </div>
   );
 }
}
