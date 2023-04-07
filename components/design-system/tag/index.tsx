import { ElementType } from 'react';
import { Box, Flex } from '../box';
import { useTheme } from '../theme';
import { hexAlpha } from '../utils';

const sizes = {
  medium: 4,
  small: 3
};

type TagProps = {
  label: string;
  as?: ElementType;
  size?: keyof typeof sizes;
};

export const Tag = ({ as = 'div', label, size = 'medium' }: TagProps) => {
  const { colors } = useTheme();
  const color = colors.text.default;

  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <Box
      as={as}
      rounding="medium"
      css={{
        border: `1px solid ${color}`,
        color: color,
        backgroundColor: hexAlpha(color, 0.2),
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
    </Box>
  );
};

export const Tags = ({
  items,
  size = 'small'
}: {
  items: string[];
  size?: keyof typeof sizes;
}) => (
  <Flex
    as="ul"
    flexWrap="wrap"
    margin="none"
    padding="none"
    gap="small"
    css={{
      listStyle: 'none'
    }}
  >
    {items.map((item) => (
      <Tag as="li" label={item} key={item} size={size} />
    ))}
  </Flex>
);
