/** @jsx jsx */
import { jsx } from '@emotion/core';
// import GatsbyLink from 'gatsby-link';

import { useTheme, FontSizeType } from '@nathsimpson/theme';

const getStyles = ({ size }: { size?: FontSizeType }) => {
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

export const TextLink = ({
  size,
  ...props
}: {
  children: string;
  href: string;
  size?: FontSizeType;
}) => {
  return <a {...props} css={getStyles({ size })} />;
};

// export const TextLinkGatsby = ({
//   size,
//   ...props
// }: {
//   children: string;
//   size?: FontSizeType;
//   to: string;
// }) => {
//   return <GatsbyLink css={getStyles(size)} {...props} />;
// };
