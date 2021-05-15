/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ElementType, ReactElement, StyleHTMLAttributes } from 'react';
import { useTheme } from '../theme';

type CardProps = {
  children: ReactElement;
  as: ElementType;
  style: StyleHTMLAttributes<'div'>;
};

export const useCardStyles = () => {
  const { boxShadow, radii, colors } = useTheme();
  return {
    ...boxShadow[1],
    background: colors.background.emphasis,
    border: `1px solid ${colors.global.border}`,
    padding: '16px 24px',
    borderRadius: radii.large
  };
};

export const Card = ({ children, style, as = 'div' }: CardProps) => {
  const Tag = as;
  const cardStyles = useCardStyles();
  return (
    <Tag
      css={{
        ...cardStyles,
        ...style
      }}
    >
      {children}
    </Tag>
  );
};
