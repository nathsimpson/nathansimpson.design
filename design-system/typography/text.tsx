/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Box, BoxProps } from '../box';
import { useTheme, FontSizeType } from '@nathsimpson/theme';
import { useMediaQuery, ResponsiveProp } from '@nathsimpson/utils';

type TextProps = {
  as?: 'p' | 'span';
  color?: ResponsiveProp<'default' | 'emphasis'>;
  size?: FontSizeType;
} & BoxProps;

export const Text = ({
  size = 'medium',
  color = 'default',
  as = 'p',
  ...props
}: TextProps) => {
  const { colors, fontsizes, fontFamilies } = useTheme();
  const { mq, mapResponsiveProp } = useMediaQuery();

  return (
    <Box
      as={as}
      margin="none"
      {...props}
      css={mq({
        color: mapResponsiveProp(color, colors.text),
        fontFamily: fontFamilies.body,
        fontSize: fontsizes[size]
      })}
    />
  );
};
