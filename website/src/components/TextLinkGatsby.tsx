/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import { FontSizeType } from '@nathsimpson/theme';
import { getLinkStyles } from '@nathsimpson/text-link';
import GatsbyLink from 'gatsby-link';

export const TextLinkGatsby = ({
  size,
  ...props
}: {
  children: string | ReactNode;
  size?: FontSizeType;
  to: string;
}) => {
  return <GatsbyLink css={getLinkStyles({ size })} {...props} />;
};
