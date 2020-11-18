/** @jsx jsx */
import { jsx } from '@emotion/core';
import { palette, borderRadius } from '../../theme';
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
  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <Tag
      css={{
        border: `1px solid ${palette[color]}`,
        color: palette[color],
        backgroundColor: hexAlpha(palette[color], 0.2),
        borderRadius: borderRadius.sm,
        fontSize: sizes[size] * 4,
        paddingTop: sizes[size],
        paddingBottom: sizes[size],
        paddingLeft: sizes[size] * 2,
        paddingRight: sizes[size] * 2,
        ...style
      }}
    >
      {formattedLabel}
    </Tag>
  );
};
