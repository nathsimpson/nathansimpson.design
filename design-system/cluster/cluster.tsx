/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Children, ReactNode } from 'react';
import { Box, BoxProps } from '../box';
import { spacing, SpacingType } from '@nathsimpson/theme';
import { forwardRefWithAs } from '@nathsimpson/utils';

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

export const Cluster = forwardRefWithAs<'div', ClusterProps>(
  ({ align = 'start', children, gap = 'none', ...props }, ref) => {
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
        ref={ref}
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
  }
);
