import React from "react";
import styled from "styled-components";

const FormInput = styled.input`
  background: #252d34;
  border: none;
  font-size: 1em;
  color: #fff;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 5px;
  padding: 0.75rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: all 0.5s;

  &:hover {
    background: #1c2227;
  }

  &:placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:active,
  &:focus {
    background: #fff;
    outline: none;
    color: #13171a;

    &:placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const FormSelect = styled.select`
  background: #252d34;
  border: none;
  font-size: 1em;
  color: #fff;
  display: block;
  width: 100%;
  margin: 5px;
  max-width: 400px;
  height: 50px;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: all 0.5s;

  &:hover {
    background: #1c2227;
  }

  &:active,
  &:focus {
    background: #fff;
    outline: none;
    color: #13171a;
  }
`;

const FormTxt = styled.textarea`
  background: #252d34;
  border: none;
  font-size: 1em;
  color: #fff;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 5px;
  padding: 0.75rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: all 0.5s;

  &:hover {
    background: #1c2227;
  }

  &:placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:active,
  &:focus {
    background: #fff;
    outline: none;
    color: #13171a;

    &:placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const FormSubmit = styled.input`
  background: rgba(250, 109, 1, 1);
  border: none;
  font-size: 1em;
  color: #fff;
  display: block;
  max-width: 400px;
  margin: 5px;
  padding: 0.75rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: all 0.5s;

  &:hover {
    background: #fff;
    color: #13171a;
  }
`;

export default class ContactForm extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h2 style={{ textAlign: "center" }}>Contact Me</h2>
        <form
          style={{ maxWidth: "400px", margin: "40px auto" }}
          name="contact"
          method="POST"
        >
          <FormInput type="text" name="name" placeholder="Name" />
          <FormInput type="email" name="email" placeholder="Email" />
          <FormInput type="tel" name="phone" placeholder="Phone" />
          <FormSelect name="idliketo">
            <option>I would like to..</option>
            <option>Chat with you</option>
            <option>Contract you</option>
          </FormSelect>
          <input type="hidden" name="form-name" value="contact" />
          <FormTxt name="message" placeholder="Message" />
          <FormSubmit type="submit" />
        </form>
      </div>
    );
  }
}
