/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';

import { colors, fontsizes, FontSizeType, fontFamilies } from '../theme';

const getStyles = (size?: FontSizeType) => ({
  color: colors.link,
  fontFamily: fontFamilies.body,
  fontSize: size ? fontsizes[size] : 'auto'
});

export const TextLink = ({
  size,
  ...props
}: {
  children: string;
  href: string;
  size?: FontSizeType;
}) => {
  return <a {...props} css={getStyles(size)} />;
};

export const TextLinkGatsby = ({
  size,
  ...props
}: {
  children: string;
  size?: FontSizeType;
  to: string;
}) => {
  return <Link css={getStyles(size)} {...props} />;
};
