/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors, spacing, fontsizes, fontFamilies, radii } from '../theme';
import hexAlpha from 'hex-alpha';

export const Button = ({ label, size = 'medium' }) => {
  const styles = useButtonStyles({ size });

  return (
    <button css={{ ...styles }} type="button">
      {label}
    </button>
  );
};

export const LinkButton = ({ label, size = 'medium' }: { label: string }) => {
  const styles = useButtonStyles({ size });
  return <a css={{ ...styles }}>{label}</a>;
};

const useButtonStyles = ({ size }) => {
  return {
    fontFamily: fontFamilies.heading,
    fontWeight: 900,
    fontSize: fontsizes[size],
    paddingTop: spacing[size],
    paddingBottom: spacing[size],
    paddingLeft: spacing[size] * 2,
    paddingRight: spacing[size] * 2,
    border: 'none',
    color: 'white',
    borderRadius: radii[size],
    backgroundColor: colors.brand,
    display: 'block',
    width: 'fit-content',

    '&:hover': {
      backgroundColor: hexAlpha(colors.brand, 0.8),
      textDecoration: 'none'
    }
  };
};
