import { FontSizeType, useTheme } from 'components/design-system/theme';

export const useLinkStyles = ({ size }: { size?: FontSizeType } = {}) => {
  const { colors, fontFamilies, fontSizes } = useTheme();

  return {
    color: colors.text.link,
    cursor: 'pointer',
    fontFamily: fontFamilies.body,
    fontSize: size ? fontSizes[size] : 'auto',
    textDecoration: 'underline',
    '&:hover, &:focus': {
      color: colors.text.linkHover,
      textDecoration: 'none'
    }
  };
};
