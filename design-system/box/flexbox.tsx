/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement } from 'react';
import { colors, spacing, radii, SpacingType, RadiiType } from '../theme';
import { BoxProps } from './box';

import {
  getMarginStyles,
  getPaddingStyles,
  getRadiiStyles,
  getFlexStyles,
  FlexProps,
  alignmentMap,
  colorMap,
  justificationMap,
  orientationMap
} from './utils';

export const FlexBox = ({
  align,
  bg = 'none',
  basis,
  children,
  flex,
  grow,
  height,
  justify,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  orientation = 'vertical',
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
  shrink,
  // style,
  width,
  ...props
}: FlexBoxProps) => {
  const marginObj = getMarginStyles({
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY
  });

  const paddingObj = getPaddingStyles({
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY
  });
  const radiiObj = getRadiiStyles({
    rounding,
    roundingBottom,
    roundingLeft,
    roundingRight,
    roundingTop
  });
  const flexStyles = getFlexStyles({
    flex,
    grow,
    shrink,
    basis
  });

  return (
    <div
      {...props}
      css={{
        ...flexStyles,
        ...radiiObj,
        ...marginObj,
        ...paddingObj,
        display: 'flex',
        alignItems: alignmentMap[align],
        backgroundColor: colorMap[bg],
        flexDirection: orientationMap[orientation],
        height,
        justifyContent: justificationMap[justify],
        width
        // ...style
      }}
    >
      {children}
    </div>
  );
};

export type FlexBoxProps = BoxProps &
  FlexProps & {
    /** The align prop maps to the align-items CSS property, and defines the alignment of items along the cross-axis of the flex container. */
    align: keyof typeof alignmentMap;
    /** The justify prop maps to the justify-content CSS property, and defines the distribution of space between items along the main-axis of the flex container. */
    justify: keyof typeof justificationMap;
    /** The orientation prop maps to the flex direction CSS property, allowing us to maintain a consistent API among the design system primitives. */
    orientation: keyof typeof orientationMap;
  };
