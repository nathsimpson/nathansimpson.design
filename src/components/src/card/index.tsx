/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors, borderRadius, boxShadow } from '../../../theme';

export const Card = ({ children, style, as = 'div' }) => {
  const Tag = as;
  return (
    <Tag
      css={{
        ...boxShadow[1],
        background: colors.backgroundEmphasis,
        border: `1px solid ${colors.border}`,
        padding: '16px 24px',
        borderRadius: borderRadius.lg,
        ...style
      }}
    >
      {children}
    </Tag>
  );
};
