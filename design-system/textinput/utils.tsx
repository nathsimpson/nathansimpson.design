/** @jsx jsx */
import { jsx } from '@emotion/core';
import { radii, colors, fontsizes } from '../theme';
import { SyntheticEvent } from 'react';

export type InputProps = {
  onChange: (event: SyntheticEvent) => void;
  isRequired?: boolean;
  label: string;
  value: string | undefined;
};

export const useInputStyles = () => {
  return {
    background: colors.input.background,
    color: colors.input.foreground,
    border: `1px solid ${colors.border}`,
    fontSize: '1em',
    display: 'block',
    width: '100%',
    maxWidth: 400,
    padding: '0.75rem',
    borderRadius: radii.medium,
    boxSizing: 'border-box',
    transition: 'all 0.5s',
    '&:hover': {
      background: colors.input.hover.background,
      color: colors.input.hover.foreground
    },
    '&:active, &:focus': {
      background: colors.input.active.background,
      color: colors.input.active.foreground,
      outline: `2px solid ${colors.brand}`
    }
  } as const;
};

export const Label = ({
  label,
  isRequired
}: {
  label: string;
  isRequired: boolean;
}) => (
  <label
    css={{
      fontSize: fontsizes.medium,
      color: colors.foreground,
      display: 'block',
      marginBottom: 6
    }}
  >
    {label}
    {isRequired && <span css={{ color: colors.brand, marginLeft: 2 }}>*</span>}
  </label>
);
