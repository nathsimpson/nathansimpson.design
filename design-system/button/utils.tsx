import { useTheme } from '../theme';
import hexAlpha from 'hex-alpha';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonWeight = 'primary' | 'secondary';

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
  const { colors, spacing, fontsizes, fontFamilies, radii } = useTheme();

  const weights = {
    primary: {
      border: 'none',
      color: 'white',
      backgroundColor: colors.text.link,
      '&:hover, &:focus': {
        backgroundColor: hexAlpha(colors.text.link, 0.8),
        textDecoration: 'none'
      }
    },
    secondary: {
      border: `2px solid ${colors.text.link}`,
      color: colors.text.link,
      background: 'none',
      '&:hover, &:focus': {
        backgroundColor: hexAlpha(colors.text.link, 0.2),
        textDecoration: 'none'
      }
    }
  } as const;

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
  } as const;
};
