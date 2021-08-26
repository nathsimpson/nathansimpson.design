import { useTheme, spacing, radii, SpacingType, RadiiType } from '../theme';
import { useMediaQuery } from '../utils';

export type ResponsiveProp<T> = T | readonly (T | null)[];

export type BoxMarginProps = {
  /** Margin */
  margin?: ResponsiveProp<SpacingType>;
  /** Margin bottom */
  marginBottom?: ResponsiveProp<SpacingType>;
  /** Margin left */
  marginLeft?: ResponsiveProp<SpacingType>;
  /** Margin right */
  marginRight?: ResponsiveProp<SpacingType>;
  /** Margin top */
  marginTop?: ResponsiveProp<SpacingType>;
  /** Margin horizontal */
  marginX?: ResponsiveProp<SpacingType>;
  /** Margin vertical */
  marginY?: ResponsiveProp<SpacingType>;
};

export type BoxPaddingProps = {
  /** Padding */
  padding?: ResponsiveProp<SpacingType>;
  /** Padding bottom */
  paddingBottom?: ResponsiveProp<SpacingType>;
  /** Padding left */
  paddingLeft?: ResponsiveProp<SpacingType>;
  /** Padding right */
  paddingRight?: ResponsiveProp<SpacingType>;
  /** Padding top */
  paddingTop?: ResponsiveProp<SpacingType>;
  /** Padding horizontal */
  paddingX?: ResponsiveProp<SpacingType>;
  /** Padding vertical */
  paddingY?: ResponsiveProp<SpacingType>;
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
}: BoxMarginProps) => {
  const { mapResponsiveProp } = useMediaQuery();

  const mb = marginBottom || marginY || margin;
  const mt = marginTop || marginY || margin;
  const ml = marginLeft || marginX || margin;
  const mr = marginRight || marginX || margin;

  return {
    marginBottom: mb && mapResponsiveProp(mb, spacing),
    marginTop: mt && mapResponsiveProp(mt, spacing),
    marginLeft: ml && mapResponsiveProp(ml, spacing),
    marginRight: mr && mapResponsiveProp(mr, spacing)
  };
};

export const getPaddingStyles = ({
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY
}: BoxPaddingProps) => {
  const { mapResponsiveProp } = useMediaQuery();

  const pb = paddingBottom || paddingY || padding;
  const pt = paddingTop || paddingY || padding;
  const pl = paddingLeft || paddingX || padding;
  const pr = paddingRight || paddingX || padding;

  return {
    paddingBottom: pb && mapResponsiveProp(pb, spacing),
    paddingTop: pt && mapResponsiveProp(pt, spacing),
    paddingLeft: pl && mapResponsiveProp(pl, spacing),
    paddingRight: pr && mapResponsiveProp(pr, spacing)
  };
};

export const getRadiiStyles = ({
  rounding,
  roundingBottom,
  roundingLeft,
  roundingRight,
  roundingTop
}: BoxRadiiProps) => {
  const { mapResponsiveProp } = useMediaQuery();

  const borderBottomLeftRadius = roundingBottom || roundingLeft || rounding;
  const borderBottomRightRadius = roundingBottom || roundingRight || rounding;
  const borderTopLeftRadius = roundingTop || roundingLeft || rounding;
  const borderTopRightRadius = roundingTop || roundingRight || rounding;

  return {
    borderBottomLeftRadius:
      borderBottomLeftRadius &&
      mapResponsiveProp(borderBottomLeftRadius, radii),
    borderBottomRightRadius:
      borderBottomRightRadius &&
      mapResponsiveProp(borderBottomRightRadius, radii),
    borderTopLeftRadius:
      borderTopLeftRadius && mapResponsiveProp(borderTopLeftRadius, radii),
    borderTopRightRadius:
      borderTopRightRadius && mapResponsiveProp(borderTopRightRadius, radii)
  };
};

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
