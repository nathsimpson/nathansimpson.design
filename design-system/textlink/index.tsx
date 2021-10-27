/** @jsx jsx */
import { jsx } from '@emotion/core';
import GatsbyLink from 'gatsby-link';

import { useTheme, FontSizeType } from '@nathsimpson/theme';

type ButtonWeight = 'primary' | 'secondary';

const getStyles = ({
  size,
  weight
}: {
  size?: FontSizeType;
  weight: ButtonWeight;
}) => {
  const { colors, fontFamilies, fontSizes } = useTheme();

  return {
    color: colors[weight === 'secondary' ? 'actionSecondary' : 'action'],
    cursor: 'pointer',
    fontFamily: fontFamilies.body,
    fontSize: size ? fontSizes[size] : 'auto',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover, &:focus': {
      color: colors.text[weight === 'secondary' ? 'link' : 'linkHover'],
      textDecoration: 'underline'
    }
  };
};

export const TextLink = ({
  size,
  weight = 'primary',
  ...props
}: {
  children: string;
  href: string;
  size?: FontSizeType;
  weight?: ButtonWeight;
}) => {
  return <a {...props} css={getStyles({ size, weight })} />;
};

export const TextLinkGatsby = ({
  size,
  weight = 'primary',
  ...props
}: {
  children: string;
  size?: FontSizeType;
  to: string;
  weight?: ButtonWeight;
}) => {
  return <GatsbyLink css={getStyles({ size, weight })} {...props} />;
};
