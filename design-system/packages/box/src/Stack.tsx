/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRefWithAs } from '@nathsimpson/utils';
import { Box } from './Box';
import { BoxProps } from './styles';

export type StackProps = Omit<BoxProps, 'display'>;

export const Stack = forwardRefWithAs<'div', StackProps>(
  (
    {
      flexDirection = 'column',
      justifyContent = 'flex-start',
      alignItems = 'stretch',
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        {...props}
      />
    );
  }
);
