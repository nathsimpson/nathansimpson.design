/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors, borderRadius, boxShadow } from '../../theme';

const Card = ({ children, style, as = 'div' }) => {
  const Tag = as;
  return (
    <Tag
      css={{
        ...boxShadow[1],
        background: colors.slate[30],
        padding: '16px 24px',
        borderRadius: borderRadius.lg,
        ...style
      }}
    >
      {children}
    </Tag>
  );
};

export default Card;
