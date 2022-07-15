/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  forwardRefWithAs,
  useMediaQuery,
  ResponsiveProp
} from '@nathsimpson/utils';
import { spacing, SpacingType } from '@nathsimpson/theme';
import { Box, BoxProps } from './box';

import {
  getFlexStyles,
  FlexProps,
  alignmentMap,
  justificationMap,
  orientationMap
} from './utils';

export const Flex = forwardRefWithAs<'div', FlexBoxProps>(
  (
    {
      align = 'start',
      as: Tag = 'div',
      basis,
      flex,
      gap,
      grow,
      justify = 'start',
      orientation = 'vertical',
      shrink,
      ...props
    },
    ref
  ) => {
    const { mapResponsiveProp } = useMediaQuery();
    const flexStyles = getFlexStyles({
      flex,
      grow,
      shrink,
      basis
    });

    const styles = {
      ...flexStyles,
      display: 'flex',
      gap: gap && mapResponsiveProp(gap, spacing),
      alignItems: alignmentMap[align],
      flexDirection: orientationMap[orientation],
      justifyContent: justificationMap[justify]
    };

    return <Box ref={ref} css={styles} {...props} />;
  }
);

export type FlexBoxProps = BoxProps &
  FlexProps & {
    gap?: ResponsiveProp<SpacingType>;
    /** The align prop maps to the align-items CSS property, and defines the alignment of items along the cross-axis of the flex container. */
    align?: keyof typeof alignmentMap;
    /** The justify prop maps to the justify-content CSS property, and defines the distribution of space between items along the main-axis of the flex container. */
    justify?: keyof typeof justificationMap;
    /** The orientation prop maps to the flex direction CSS property, allowing us to maintain a consistent API among the design system primitives. */
    orientation?: keyof typeof orientationMap;
  };
