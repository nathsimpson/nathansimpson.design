import { colors, spacing, fontsizes, fontFamilies, radii } from '../theme';
import hexAlpha from 'hex-alpha';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonWeight = keyof typeof weights;

export type ButtonProps = {
  label: string;
  size: ButtonSize;
  weight: ButtonWeight;
};

export const useButtonStyles = ({
  size,
  weight
}: {
  size: ButtonSize;
  weight: ButtonWeight;
}) => {
  return {
    fontFamily: fontFamilies.heading,
    fontWeight: 900,
    fontSize: fontsizes[size],
    paddingTop: spacing[size],
    paddingBottom: spacing[size],
    paddingLeft: spacing[size] * 2,
    paddingRight: spacing[size] * 2,
    borderRadius: radii[size],
    cursor: 'pointer',
    display: 'block',
    width: 'fit-content',
    boxSizing: 'border-box',
    lineHeight: 1,
    ...weights[weight]
  };
};

const weights = {
  primary: {
    border: 'none',
    color: 'white',
    backgroundColor: colors.brand,
    '&:hover': {
      backgroundColor: hexAlpha(colors.brand, 0.8),
      textDecoration: 'none'
    }
  },
  secondary: {
    border: `2px solid ${colors.brand}`,
    color: colors.brand,
    background: 'none',
    '&:hover': {
      backgroundColor: hexAlpha(colors.brand, 0.2),
      textDecoration: 'none'
    }
  }
};
