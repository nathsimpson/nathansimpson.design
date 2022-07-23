import { AnchorHTMLAttributes } from 'react';
import { useTheme, FontSizeType } from '@nathsimpson/theme';

export const getLinkStyles = ({ size }: { size?: FontSizeType }) => {
  const { colors, fontFamilies, fontSizes } = useTheme();

  return {
    color: colors.action,
    cursor: 'pointer',
    fontFamily: fontFamilies.body,
    fontSize: size ? fontSizes[size] : 'auto',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover, &:focus': {
      color: colors.text.linkHover,
      textDecoration: 'underline'
    }
  };
};

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: FontSizeType;
};

export const TextLink = ({ size, ...props }: TextLinkProps) => {
  return <a css={getLinkStyles({ size })} {...props} />;
};
