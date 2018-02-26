import React from 'react';

export default class ContactForm extends React.Component {

  render() {
    return(
      <div style={{width:'100%'}}>
      <h2>Contact Me</h2>
      <form>
      	<input type="text" name="name" placeholder="Name"/>
      	<input type="email" name="name" placeholder="Email"/>
      	<input type="tel" name="name" placeholder="Phone"/>
      	<select name="idliketo">
      		<option>I'd like to..</option>
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
