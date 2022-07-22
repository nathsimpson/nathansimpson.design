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

export const Tag = ({ label, as, size = 'medium' }: TagProps) => {
  const { colors, radii } = useTheme();
  const color = colors.text.default;

  const Div = as || 'div';
  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <Div
      css={{
        border: `1px solid ${color}`,
        color: color,
        backgroundColor: hexAlpha(color, 0.2),
        borderRadius: radii.medium,
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

export const Tags = ({
  items,
  size = 'small'
}: {
  items: string[];
  size?: keyof typeof sizes;
}) => (
  <Flex gap={size} orientation="horizontal">
    {items.map((item) => (
      <Tag label={item} key={item} size={size} />
    ))}
  </Flex>
);
