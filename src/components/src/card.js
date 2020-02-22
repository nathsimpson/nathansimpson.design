/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors, borderRadius, boxShadow } from '../../theme';

const Card = ({ children, style }) => (
  <div
    css={{
      ...boxShadow[1],
      background: colors.slate[30],
      padding: '16px 24px',
      borderRadius: borderRadius.lg,
      ...style
    }}
  >
    {children}
  </div>
);

export default Card;
