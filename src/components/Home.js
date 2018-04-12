import React from 'react';
import TreehouseBadges from './TreehouseBadges';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import { Route, Redirect } from 'react-router';
import {Link, NavLink} from 'react-router-dom';

class Home extends React.Component {
 render(){
   return(
     <main>
       <div id="intro" style={{textAlign: 'center', margin: '80px'}}>
           <h1 style={{fontSize: '3em', fontWeight:500, lineHeight:'1em', margin: '10px 0px',}}><span style={{color:'white'}}>Hi I&apos;m</span> Nathan Simpson</h1>
           <span>Designer and Frontend Developer from Sydney.</span>
       </div>
       <hr/>
       <Portfolio projects={this.props.projects} limit={7}/>
       <hr/>
       <TreehouseBadges/>
       <hr/>
       <ContactForm/>
     </main>
   );
 }
}

export default Home;
