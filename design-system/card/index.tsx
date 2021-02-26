/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ElementType, ReactElement, StyleHTMLAttributes } from 'react';
import { colors, radii, boxShadow } from '../theme';

type CardProps = {
  children: ReactElement;
  as: ElementType;
  style: StyleHTMLAttributes<'div'>;
};

export const Card = ({ children, style, as = 'div' }: CardProps) => {
  const Tag = as;
  return (
    <Tag
      css={{
        ...boxShadow[1],
        background: colors.backgroundEmphasis,
        border: `1px solid ${colors.border}`,
        padding: '16px 24px',
        borderRadius: radii.large,
        ...style
      }}
    >
      {children}
    </Tag>
  );
};
