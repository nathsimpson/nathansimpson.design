import React from 'react';
import TreehouseBadges from './TreehouseBadges';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';

class Home extends React.Component {
 render(){
   return(
     <main>
       <div className="row" id="intro">
         <div className="hero-half">
         </div>
         <div className="hero-half">
           <h1 style={{fontSize: '3em', fontWeight:500, lineHeight:'1em', margin: '10px 0px',}}>Hi I&apos;m <br/><span style={{color:'#FA6D01'}}>Nathan Simpson</span></h1>
           <span>Designer and Frontend Developer from Sydney.</span>
         </div>
       </div>
       <hr/>
       <Portfolio projects={this.props.projects} limit={7}/>
       <hr/>
       <TreehouseBadges/>
       <hr/>
       <ContactForm/>
       <hr/>
     </main>
   );
 }
}

export default Home;
