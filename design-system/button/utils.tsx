import { useTheme } from '@nathsimpson/theme';
import { hexAlpha } from '@nathsimpson/utils';
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

  const weights = {
    primary: {
      border: 'none',
      fontWeight: 900,
      color: 'white',
      backgroundColor: colors.action,
      '&:hover, &:focus': {
        backgroundColor: hexAlpha(colors.action, 0.8),
        textDecoration: 'none'
      }
    },
    secondary: {
      border: `2px solid ${colors.action}`,
      color: colors.action,
      background: 'none',
      '&:hover, &:focus': {
        backgroundColor: hexAlpha(colors.action, 0.2),
        textDecoration: 'none'
      }
    },
    none: {
      border: `none`,
      color: colors.action,
      background: 'none',
      '&:hover, &:focus': {
        backgroundColor: hexAlpha(colors.action, 0.2),
        textDecoration: 'none'
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
