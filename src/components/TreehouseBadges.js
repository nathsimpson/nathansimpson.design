import React from 'react';

export default class TreehouseBadges extends React.Component {
  constructor(){
    super();
    this.state = {
      badges: []
    };
  }

  componentDidMount(){
    //may need to implement axios
    fetch('https://teamtreehouse.com/nathansimpson.json')
      .then(response => response.json())
      .then(responseData=>{this.setState({badges: responseData.badges});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="badges">
        <h2>Treehouse Badges</h2>
        {this.state.badges.map(badge =>
          <img className="badges_badge" src={badge.icon_url} title={badge.name} alt={badge.name} key={badge.id} style={{width:'60px',margin:'-17px 12px 0px 0px'}}/>
        )}
      </div>);
  }
}
