/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Children, ReactNode } from 'react';
import { Box, BoxProps } from '../box';
import { spacing, SpacingType } from '../theme';

const alignment = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

type ClusterProps = {
  /** The value of the "align-items" property. */
  align?: keyof typeof alignment;
  /** Each item in the container. */
  children: ReactNode;
  /** The size of the gap between each item. */
  gap?: SpacingType;
} & BoxProps;

export const Cluster = ({
  align = 'start',
  children,
  gap = 'none',
  ...props
}: ClusterProps) => {
  const resolvedAlign = alignment[align];
  const resolvedGap = spacing[gap];

  return (
    <Box
      css={{
        alignItems: resolvedAlign,
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: -resolvedGap,
        marginTop: -resolvedGap,
        overflow: 'hidden'
      }}
      {...props}
    >
      {Children.map(children, child =>
        child !== null && child !== undefined ? (
          <div
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              paddingLeft: resolvedGap,
              paddingTop: resolvedGap
            }}
          >
            {child}
          </div>
        ) : null
      )}
    </Box>
  );
};
