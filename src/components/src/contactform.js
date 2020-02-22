/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { borderRadius, colors, text } from '../../theme';

export default () => (
  <div style={{ width: '100%' }}>
    <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
    <form
      style={{ maxWidth: '400px', margin: '40px auto' }}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Input type="text" name="name" label="Name" isRequired />
      <Input type="email" name="email" label="Email" isRequired />
      <Input type="tel" name="phone" label="Phone" />
      <Select name="idliketo" label="I would like to...">
        <option>Chat with you</option>
        <option>Contract you</option>
      </Select>
      <TextInput name="message" label="Message" isRequired />
      <input type="hidden" name="form-name" value="contact" />
      <FormSubmit type="submit" />
    </form>
  </div>
);

const baseInputStyles = {
  background: colors.slate[30],
  border: 'none',
  fontSize: '1em',
  color: '#fff',
  display: 'block',
  width: '100%',
  maxWidth: 400,
  padding: '0.75rem',
  borderRadius: borderRadius.md,
  boxSizing: 'border-box',
  transition: 'all 0.5s',
  '&:hover': {
    background: colors.slate[40]
  },
  '&:active, &:focus': {
    background: '#fff',
    outline: 'none',
    color: colors.slate[10]
  }
};

const Input = props => (
  <div css={{ marginBottom: 12 }}>
    <Label label={props.label} isRequired={props.isRequired} />
    <input css={baseInputStyles} {...props} />
  </div>
);

const Select = props => (
  <div css={{ marginBottom: 12 }}>
    <Label label={props.label} isRequired={props.isRequired} />
    <select
      css={{
        ...baseInputStyles,
        height: 50
      }}
      {...props}
    />
  </div>
);

const TextInput = props => (
  <div css={{ marginBottom: 12 }}>
    <Label label={props.label} isRequired={props.isRequired} />
    <textArea css={baseInputStyles} {...props} />
  </div>
);

const FormSubmit = styled.input({
  background: 'rgba(250, 109, 1, 1)',
  border: 'none',
  fontSize: '1em',
  color: '#fff',
  marginTop: 6,
  padding: '6px 18px',
  borderRadius: borderRadius.md,
  boxSizing: 'border-box',
  transition: 'all 0.5s',
  fontWeight: 700,

  '&:hover': {
    background: '#fff',
    color: '#13171a'
  }
});

const Label = ({ label, isRequired }) => (
  <label
    css={{
      ...text[2],
      color: colors.slate[90],
      display: 'block',
      marginBottom: 6
    }}
  >
    {label}
    {isRequired && <span css={{ color: colors.orange, marginLeft: 2 }}>*</span>}
  </label>
);
