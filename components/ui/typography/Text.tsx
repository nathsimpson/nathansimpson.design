import { Box, BoxProps } from '../box';
import { useTheme, FontSizeType } from '../../../lib/theme';
import { useMediaQuery, ResponsiveProp } from '../../../lib/useMediaQuery';

type TextProps = {
  as?: 'p' | 'span';
  color?: ResponsiveProp<'default' | 'emphasis'>;
  size?: FontSizeType;
  textAlign?: 'center' | 'left' | 'right' | 'justify';
} & BoxProps;

export const Text = ({
  size = 'medium',
  color = 'default',
  textAlign,
  as = 'p',
  ...props
}: TextProps) => {
  const { colors, fontSizes, fontFamilies } = useTheme();
  const { mq, mapResponsiveProp } = useMediaQuery();

  return (
    <Box
      as={as}
      margin="none"
      {...props}
      css={mq({
        color: mapResponsiveProp(color, colors.text),
        fontFamily: fontFamilies.body,
        fontSize: fontSizes[size],
        textAlign: textAlign
      })}
    />
  );
};
