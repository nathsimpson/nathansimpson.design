import React from 'react';

export default class ContactForm extends React.Component {

  render() {
    return(
      <div style={{width:'100%'}}>
      <h2 style={{textAlign: 'center'}}>Contact Me</h2>
      <form onSubmit={this.onSubmit} style={{maxWidth: '400px', margin: '0 auto'}}>
      	<input type="text" name="name" placeholder="Name"/>
      	<input type="email" name="name" placeholder="Email"/>
      	<input type="tel" name="name" placeholder="Phone"/>
      	<select name="idliketo">
      		<option>I would like to..</option>
      		<option>Chat with you</option>
      		<option>Contract you</option>
      		<option>Employ you</option>
      	</select>
      	<textarea name="name" placeholder="Message"></textarea>
      	<input type="submit"/>
      </form>
      </div>
    );
  }
}
