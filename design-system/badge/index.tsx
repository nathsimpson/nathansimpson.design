/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ElementType } from 'react';
import { colors, radii } from '../theme';
import hexAlpha from 'hex-alpha';

const sizes = {
  medium: 4,
  small: 3
};

type BadgeProps = {
  label: string;
  as: ElementType;
  color: 'brand' | 'decorativeGreen' | 'decorativePurple';
  size: keyof typeof sizes;
};

export const Badge = ({
  label,
  as,
  color = 'brand',
  size = 'medium'
}: BadgeProps) => {
  const Tag = as || 'div';
  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <Tag
      css={{
        border: `1px solid ${colors[color]}`,
        color: colors[color],
        backgroundColor: hexAlpha(colors[color], 0.2),
        borderRadius: radii.sm,
        fontSize: sizes[size] * 4,
        paddingTop: sizes[size],
        paddingBottom: sizes[size],
        paddingLeft: sizes[size] * 2,
        paddingRight: sizes[size] * 2
      }}
    >
      {formattedLabel}
    </Tag>
  );
};
