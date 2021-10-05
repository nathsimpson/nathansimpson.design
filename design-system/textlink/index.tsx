/** @jsx jsx */
import { jsx } from '@emotion/core';
import GatsbyLink from 'gatsby-link';

import { useTheme, TextStyleType } from '@nathsimpson/theme';

const getStyles = (token?: TextStyleType) => {
  const { colors, textStyles } = useTheme();

  return {
    ...(token ? textStyles[token] : { fontSize: 'auto' }),
    color: colors.text.link,
    cursor: 'pointer',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover, &:focus': {
      color: colors.text.linkHover,
      textDecoration: 'underline'
    }
  };
};

export const TextLink = ({
  token,
  ...props
}: {
  children: string;
  href: string;
  token?: TextStyleType;
}) => {
  return <a css={getStyles(token)} {...props} />;
};

export const TextLinkGatsby = ({
  token,
  ...props
}: {
  children: string;
  to: string;
  token?: TextStyleType;
}) => {
  return <GatsbyLink css={getStyles(token)} {...props} />;
};
