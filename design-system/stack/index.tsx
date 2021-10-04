/** @jsxImportSource @emotion/react */
import { useMediaQuery, ResponsiveProp } from '@nathsimpson/utils';
import { spacing, SpacingType } from '@nathsimpson/theme';

import { Box, BoxProps } from '../box';

const alignment = {
  center: 'center',
  end: 'end',
  start: 'start',
  stretch: 'stretch'
};

type StackProps = {
  /** The value of the "align-items" property. */
  align?: keyof typeof alignment;
  /** Which direction to layout the items within the stack. */
  orientation?: 'horizontal' | 'vertical';
  /** The size of the gap between each element in the stack. */
  gap: ResponsiveProp<SpacingType>;
} & BoxProps;

export const Stack: React.FunctionComponent<StackProps> = ({
  align = 'stretch',
  gap = 'none',
  children,
  orientation = 'vertical',
  ...props
}) => {
  const { dimension, autoFlow } = orientationMap[orientation];
  const { mapResponsiveProp } = useMediaQuery();

  return (
    <Box
      css={{
        display: 'grid',
        // prevent grid children from expanding the gap to fill the available space
        [dimension]: 'fit-content',
        gap: mapResponsiveProp(gap, spacing),
        justifyItems: align,

        // support horizontal orientation
        gridAutoFlow: autoFlow,

        // min-width and min-height declarations prevent overflow issues
        // https://css-tricks.com/preventing-a-grid-blowout/
        minHeight: 0,
        minWidth: 0
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

// Utils
// ------------------------------

const orientationMap = {
  horizontal: {
    autoFlow: 'column',
    dimension: 'width'
  },
  vertical: {
    autoFlow: 'row',
    dimension: 'height'
  }
} as const;
