/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { borderRadius, colors, fontsizes } from '../../theme';
import hexAlpha from 'hex-alpha';

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
  background: colors.input.background,
  color: colors.input.foreground,
  outlineColor: colors.brand,
  border: `1px solid ${colors.border}`,
  fontSize: '1em',
  display: 'block',
  width: '100%',
  maxWidth: 400,
  padding: '0.75rem',
  borderRadius: borderRadius.md,
  boxSizing: 'border-box',
  transition: 'all 0.5s',
  '&:hover': {
    background: colors.input.hover.background,
    color: colors.input.hover.foreground
  },
  '&:active, &:focus': {
    background: colors.input.active.background,
    color: colors.input.active.foreground
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
  background: hexAlpha(colors.link, 0.2),
  border: 'none',
  fontSize: '1em',
  color: colors.link,
  marginTop: 6,
  padding: '12px 24px',
  borderRadius: borderRadius.md,
  boxSizing: 'border-box',
  transition: 'all 0.5s',
  fontWeight: 700,

  '&:hover': {
    background: colors.link,
    color: colors.foregroundEmphasis
  }
});

const Label = ({ label, isRequired }) => (
  <label
    css={{
      fontSize: fontsizes.medium,
      color: colors.foreground,
      display: 'block',
      marginBottom: 6
    }}
  >
    {label}
    {isRequired && <span css={{ color: colors.orange, marginLeft: 2 }}>*</span>}
  </label>
);
