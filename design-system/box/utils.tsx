import { useTheme, spacing, radii, SpacingType, RadiiType } from '../theme';

export type BoxMarginProps = {
  /** Margin */
  margin?: SpacingType;
  /** Margin bottom */
  marginBottom?: SpacingType;
  /** Margin left */
  marginLeft?: SpacingType;
  /** Margin right */
  marginRight?: SpacingType;
  /** Margin top */
  marginTop?: SpacingType;
  /** Margin horizontal */
  marginX?: SpacingType;
  /** Margin vertical */
  marginY?: SpacingType;
};

export type BoxPaddingProps = {
  /** Padding */
  padding?: SpacingType;
  /** Padding bottom */
  paddingBottom?: SpacingType;
  /** Padding left */
  paddingLeft?: SpacingType;
  /** Padding right */
  paddingRight?: SpacingType;
  /** Padding top */
  paddingTop?: SpacingType;
  /** Padding horizontal */
  paddingX?: SpacingType;
  /** Padding vertical */
  paddingY?: SpacingType;
};

export type BoxRadiiProps = {
  /** Radius */
  rounding?: RadiiType;
  /** Radius bottom */
  roundingBottom?: RadiiType;
  /** Radius left */
  roundingLeft?: RadiiType;
  /** Radius right */
  roundingRight?: RadiiType;
  /** Radius top */
  roundingTop?: RadiiType;
};

export type FlexProps = {
  /** Define the initial main size of a flex item. */
  basis?: number | string;
  /** You can pass shorthand values directly to the CSS flex property. e.g.<Box flex="0 1 auto" /> */
  flex?: number | string;
  /** Define grow "factor" of a flex item. It accepts a unitless value, which dictates the amount of available space inside the flex container the item should take up. */
  grow?: number;
  /** Define shrink "factor" of a flex item. It accepts a unitless value, which dictates the amount of available space inside the flex container the item should take up. */
  shrink?: number;
};

export const getMarginStyles = ({
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY
}: BoxMarginProps) => ({
  marginTop: spacing[marginTop || marginY || margin || 'none'],
  marginBottom: spacing[marginBottom || marginY || margin || 'none'],
  marginLeft: spacing[marginLeft || marginX || margin || 'none'],
  marginRight: spacing[marginRight || marginX || margin || 'none']
});

export const getPaddingStyles = ({
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY
}: BoxPaddingProps) => ({
  paddingTop: spacing[paddingTop || paddingY || padding || 'none'],
  paddingBottom: spacing[paddingBottom || paddingY || padding || 'none'],
  paddingLeft: spacing[paddingLeft || paddingX || padding || 'none'],
  paddingRight: spacing[paddingRight || paddingX || padding || 'none']
});

export const getRadiiStyles = ({
  rounding,
  roundingBottom,
  roundingLeft,
  roundingRight,
  roundingTop
}: BoxRadiiProps) => ({
  borderTopLeftRadius: radii[roundingTop || roundingLeft || rounding || 'none'],
  borderTopRightRadius:
    radii[roundingTop || roundingRight || rounding || 'none'],
  borderBottomLeftRadius:
    radii[roundingBottom || roundingLeft || rounding || 'none'],
  borderBottomRightRadius:
    radii[roundingBottom || roundingRight || rounding || 'none']
});

export const getFlexStyles = ({ flex, basis, grow, shrink }: FlexProps) => {
  if (flex) {
    return {
      flex: flex
    };
  } else {
    return {
      flexBasis: basis,
      flexGrow: grow,
      flexShrink: shrink
    };
  }
};

export const orientationMap = {
  horizontal: 'row',
  vertical: 'column'
} as const;

export const alignmentMap = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
} as const;

export const justificationMap = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  even: 'space-evenly',
  start: 'flex-start',
  stretch: 'stretch'
} as const;

export const useBoxColors = () => {
  const { colors } = useTheme();

  return {
    none: 'none',
    base: colors.background.default,
    emphasis: colors.background.emphasis
  } as const;
};
