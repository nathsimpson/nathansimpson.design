import { FontSizeType, useTheme } from 'lib/theme';

export const useLinkStyles = ({ size }: { size?: FontSizeType } = {}) => {
  const { colors, fontFamilies, fontSizes } = useTheme();

  return {
    color: colors.text.link,
    cursor: 'pointer',
    fontFamily: fontFamilies.body,
    fontSize: size ? fontSizes[size] : 'auto',
    textDecoration: 'underline',
    '&:hover, &:focus': {
      textDecoration: 'none'
    }
  };
};
