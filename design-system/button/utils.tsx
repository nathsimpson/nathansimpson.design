import { useTheme } from '@nathsimpson/theme';
import { hexAlpha, getContrastColor, getTintColor } from '@nathsimpson/utils';
import { IconType } from '@nathsimpson/icon';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonWeight = 'primary' | 'secondary' | 'none';

export type ButtonProps = {
  iconAfter?: IconType;
  iconBefore?: IconType;
  label: string;
  size: ButtonSize;
  weight: ButtonWeight;
};

export type IconButtonProps = {
  icon: IconType;
  /** The label is read out by screenreaders */
  label: string;
  onClick: () => void;
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
  const { colors, spacing, fontSizes, fontFamilies, radii } = useTheme();

  const buttonColors = {
    enabled: colors.brand,
    hover: getTintColor(colors.brand, 6),
    active: getTintColor(colors.brand, 12)
  };

  const weights = {
    primary: {
      border: 'none',
      fontWeight: 900,
      color: getContrastColor(buttonColors.enabled),
      backgroundColor: buttonColors.enabled,
      '&:hover, &:focus': {
        backgroundColor: buttonColors.hover,
        color: getContrastColor(buttonColors.hover),
        textDecoration: 'none'
      },
      '&:active': {
        backgroundColor: getTintColor(colors.brand, 20),
        color: getContrastColor(buttonColors.active)
      }
    },
    secondary: {
      border: `2px solid ${colors.action}`,
      color: colors.action,
      background: 'none',
      '&:hover, &:focus': {
        backgroundColor: hexAlpha(colors.action, 0.2),
        textDecoration: 'none'
      },
      '&:active': {
        backgroundColor: hexAlpha(colors.brand, 0.3)
      }
    },
    none: {
      border: `none`,
      color: colors.action,
      background: 'none',
      '&:hover, &:focus': {
        backgroundColor: hexAlpha(colors.action, 0.2),
        textDecoration: 'none'
      },
      '&:active': {
        backgroundColor: hexAlpha(colors.brand, 0.3)
      }
    }
  } as const;

  return {
    fontFamily: fontFamilies.heading,
    fontWeight: 700,
    fontSize: fontSizes[size],
    paddingTop: spacing[size],
    paddingBottom: spacing[size],
    paddingLeft: spacing[size] * 2,
    paddingRight: spacing[size] * 2,
    borderRadius: radii[size],
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'grid',
    gap: spacing.xsmall,
    justifyItems: 'center',
    alignItems: 'center',
    gridAutoFlow: 'column',
    width: 'fit-content',
    boxSizing: 'border-box',
    lineHeight: 1,
    ...weights[weight]
  } as const;
};
