/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement } from 'react';

import {
  BoxMarginProps,
  BoxPaddingProps,
  BoxRadiiProps,
  getMarginStyles,
  getPaddingStyles,
  getRadiiStyles,
  colorMap
} from './utils';

export const Box = ({
  bg = 'none',
  children,
  height,
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
  // style,
  width,
  ...props
}: BoxProps) => {
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

  return (
    <div
      {...props}
      css={{
        backgroundColor: colorMap[bg],
        ...radiiObj,
        ...marginObj,
        ...paddingObj,
        height,
        width
        // ...style
      }}
    >
      {children}
    </div>
  );
};

export type BoxProps = BoxMarginProps &
  BoxPaddingProps &
  BoxRadiiProps & {
    /** Background color */
    bg: 'none' | 'base' | 'emphasis';
    /** The content of this flex container. */
    children: ReactElement;
    /** Height */
    height: number;
    /** Width */
    width: number;
    /** The regular style prop */
    // style: StylePropType,
  };
