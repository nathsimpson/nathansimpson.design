/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ElementType } from 'react';
import { Flex } from '@nathsimpson/box';
import { useTheme } from '@nathsimpson/theme';
import { hexAlpha } from '@nathsimpson/utils';

const sizes = {
  medium: 4,
  small: 3
};

type TagProps = {
  label: string;
  as?: ElementType;
  size?: keyof typeof sizes;
};

export const Tag = ({ as: Tag = 'div', label, size = 'medium' }: TagProps) => {
  const { colors, radii } = useTheme();
  const color = colors.text.default;

  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <Tag
      css={{
        border: `1px solid ${color}`,
        color: color,
        backgroundColor: hexAlpha(color, 0.2),
        borderRadius: radii.medium,
        display: 'inline-flex',
        flexShrink: 0,
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

export const Tags = ({
  items,
  size = 'small'
}: {
  items: string[];
  size?: keyof typeof sizes;
}) => (
  <Flex as="ul" gap={size}>
    {items.map((item) => (
      <Tag as="li" label={item} key={item} size={size} />
    ))}
  </Flex>
);
