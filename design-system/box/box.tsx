/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  ReactElement,
  ElementType,
  FunctionComponent,
  StyleHTMLAttributes
} from 'react';

import {
  BoxMarginProps,
  BoxPaddingProps,
  BoxRadiiProps,
  getMarginStyles,
  getPaddingStyles,
  getRadiiStyles,
  colorMap
} from './utils';

export const Box: FunctionComponent<BoxProps> = ({
  as = 'div',
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
  style,
  width,
  ...props
}) => {
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

  const Tag = as;
  return (
    <Tag
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
    </Tag>
  );
};

export type BoxProps = BoxMarginProps &
  BoxPaddingProps &
  BoxRadiiProps & {
    as?: ElementType;
    /** Background color */
    bg?: 'none' | 'base' | 'emphasis';
    /** The content of this flex container. */
    children?: ReactElement | string;
    /** Height */
    height?: number;
    /** Width */
    width?: number;
    /** The regular style prop */
    style?: StyleHTMLAttributes<'div'>;
  };
