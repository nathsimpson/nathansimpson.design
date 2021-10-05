/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, BoxProps } from '../box';
import { useTheme, TextStyleType } from '@nathsimpson/theme';
import { useMediaQuery, ResponsiveProp } from '@nathsimpson/utils';

type TextProps = {
  as?: 'p' | 'span';
  color?: ResponsiveProp<'default' | 'emphasis'>;
  token?: TextStyleType;
} & BoxProps;

export const Text = ({
  as = 'p',
  color = 'default',
  token = 'medium',
  ...props
}: TextProps) => {
  const { colors, textStyles } = useTheme();
  const { mq, mapResponsiveProp } = useMediaQuery();

  const resolvedToken = token;

  return (
    <Box
      as={as}
      margin="none"
      css={mq({
        color: mapResponsiveProp(color, colors.text),
        ...textStyles[resolvedToken]
      })}
      {...props}
    />
  );
};
