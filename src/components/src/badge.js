/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors, borderRadius } from '../../theme';
import hexAlpha from 'hex-alpha';

const sizes = {
  medium: 4,
  small: 3
};

export const Badge = ({
  label,
  as,
  color = 'orange',
  size = 'medium',
  style
}) => {
  const Tag = as || 'div';
  return (
    <Tag
      css={{
        border: `1px solid ${colors[color]}`,
        color: colors[color],
        backgroundColor: hexAlpha(colors[color], 0.2),
        borderRadius: borderRadius.sm,
        paddingTop: sizes[size],
        paddingBottom: sizes[size],
        paddingLeft: sizes[size] * 2,
        paddingRight: sizes[size] * 2,
        ...style
      }}
    >
      {label}
    </Tag>
  );
};
