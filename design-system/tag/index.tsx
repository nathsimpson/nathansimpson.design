/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ElementType } from 'react';
import { useTheme } from '../theme';
import hexAlpha from 'hex-alpha';

const sizes = {
  medium: 4,
  small: 3
};

type TagProps = {
  label: string;
  as: ElementType;
  color: 'default' | 'brand' | 'blue' | 'purple' | 'green';
  size: keyof typeof sizes;
};

export const Tag = ({
  label,
  as,
  color = 'default',
  size = 'medium'
}: TagProps) => {
  const { colors, radii } = useTheme();
  const colorMap = {
    default: colors.text.default,
    brand: colors.global.brand,
    blue: colors.decorative.blue,
    purple: colors.decorative.purple,
    green: colors.decorative.green
  } as const;

  const Div = as || 'div';
  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <Div
      css={{
        border: `1px solid ${colorMap[color]}`,
        color: colorMap[color],
        backgroundColor: hexAlpha(colorMap[color], 0.2),
        borderRadius: radii.small,
        display: 'inline-flex',
        fontSize: sizes[size] * 4,
        paddingTop: sizes[size],
        paddingBottom: sizes[size],
        paddingLeft: sizes[size] * 2,
        paddingRight: sizes[size] * 2
      }}
    >
      {formattedLabel}
    </Div>
  );
};
