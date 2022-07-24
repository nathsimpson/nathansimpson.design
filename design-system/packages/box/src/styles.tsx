import {
  useTheme,
  spacing,
  radii,
  SpacingType,
  RadiiType
} from '@nathsimpson/theme';
import {
  mapResponsiveProp,
  useMediaQuery,
  ResponsiveProp
} from '@nathsimpson/utils';
import { ElementType, ReactNode } from 'react';

type BoxMarginProps = {
  margin?: ResponsiveProp<SpacingType>;
  marginBottom?: ResponsiveProp<SpacingType>;
  marginLeft?: ResponsiveProp<SpacingType>;
  marginRight?: ResponsiveProp<SpacingType>;
  marginTop?: ResponsiveProp<SpacingType>;
  marginX?: ResponsiveProp<SpacingType>;
  marginY?: ResponsiveProp<SpacingType>;
};

const getMarginStyles = ({
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY
}: BoxMarginProps) => {
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

type BoxPaddingProps = {
  padding?: ResponsiveProp<SpacingType>;
  paddingBottom?: ResponsiveProp<SpacingType>;
  paddingLeft?: ResponsiveProp<SpacingType>;
  paddingRight?: ResponsiveProp<SpacingType>;
  paddingTop?: ResponsiveProp<SpacingType>;
  paddingX?: ResponsiveProp<SpacingType>;
  paddingY?: ResponsiveProp<SpacingType>;
};

const getPaddingStyles = ({
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY
}: BoxPaddingProps) => {
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

type BoxRadiiProps = {
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

const getRadiiStyles = ({
  rounding,
  roundingBottom,
  roundingLeft,
  roundingRight,
  roundingTop
}: BoxRadiiProps) => {
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

type BoxLayoutProps = {
  display?: 'block' | 'inline-block' | 'flex' | 'inline-flex';
  height?: ResponsiveProp<number | string>;
  width?: ResponsiveProp<number | string>;
  gap?: ResponsiveProp<SpacingType>;
  /** Defines the alignment of items along the cross-axis of the flex container. */
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'stretch';
  justifyContent?:
    | 'space-around'
    | 'space-between'
    | 'center'
    | 'flex-end'
    | 'space-evenly'
    | 'flex-start'
    | 'stretch';
  /** Define the initial main size of a flex item. */
  flexBasis?: number | string;
  /** Define grow "factor" of a flex item. It accepts a unitless value, which dictates the amount of available space inside the flex container the item should take up. */
  flexGrow?: number;
  /** Define shrink "factor" of a flex item. It accepts a unitless value, which dictates the amount of available space inside the flex container the item should take up. */
  flexShrink?: number;
  /** Defines the distribution of space between items along the main-axis of the flex container. */
  flexDirection?: ResponsiveProp<
    'row' | 'row-reverse' | 'column' | 'column-reverse'
  >;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

const layoutStyles = ({
  display,
  height,
  gap,
  width,
  alignItems,
  justifyContent,
  flexBasis,
  flexGrow,
  flexShrink,
  flexDirection,
  flexWrap
}: BoxLayoutProps) => {
  return {
    display,
    height: height,
    width,
    gap: gap && mapResponsiveProp(gap, spacing),
    alignItems,
    justifyContent,
    flexBasis,
    flexGrow,
    flexShrink,
    flexDirection,
    flexWrap
  };
};

type BoxColorProps = {
  /** Background color */
  bg?: 'none' | 'base' | 'emphasis';
};
const colorStyles = ({ bg }: BoxColorProps) => {
  const { colors } = useTheme();
  const bgColors = {
    none: 'none',
    base: colors.background.default,
    emphasis: colors.background.emphasis
  };
  return {
    background: bg && mapResponsiveProp(bg, bgColors)
  };
};

export type BoxProps = BoxMarginProps &
  BoxPaddingProps &
  BoxColorProps &
  BoxRadiiProps &
  BoxLayoutProps & {
    as?: ElementType;
    /** The content of this container. */
    children?: ReactNode;
  };

export const boxStyles = ({
  display,
  height,
  width,
  gap,
  alignItems,
  justifyContent,
  flexBasis,
  flexGrow,
  flexShrink,
  flexDirection,
  flexWrap,
  bg,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  rounding,
  roundingBottom,
  roundingLeft,
  roundingRight,
  roundingTop,
  ...attrs
}: BoxProps) => {
  const { mq } = useMediaQuery();

  return [
    mq({
      // common resets
      boxSizing: 'border-box',
      listStyle: 'none',

      ...colorStyles({
        bg
      }),
      ...getMarginStyles({
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginX,
        marginY
      }),
      ...getPaddingStyles({
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingX,
        paddingY
      }),
      ...getRadiiStyles({
        rounding,
        roundingBottom,
        roundingLeft,
        roundingRight,
        roundingTop
      }),
      ...layoutStyles({
        display,
        height,
        gap,
        width,
        alignItems,
        justifyContent,
        flexBasis,
        flexGrow,
        flexShrink,
        flexDirection,
        flexWrap
      })
    }),
    attrs
  ];
};
