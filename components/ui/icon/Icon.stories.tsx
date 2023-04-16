import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';
import { Text } from '../typography';
import { useMediaQuery } from '../../../lib/useMediaQuery';
import { Stack } from '../box';
import { spacing } from '../../../lib/theme';
import { ICONS } from './icons';

const IconsExample = () => {
  const { mq } = useMediaQuery();
  return (
    <div
      css={mq({
        display: 'grid',
        gridTemplateColumns: [
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)'
        ],
        width: '100%',
        gap: spacing.medium
      })}
    >
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map((icon) => (
        <Stack
          alignItems="center"
          bg="emphasis"
          gap="xsmall"
          paddingY="large"
          rounding="medium"
          key={icon}
        >
          <Icon icon={icon} size={32} />
          <Text as="span">{icon}</Text>
        </Stack>
      ))}
    </div>
  );
};

const meta: Meta = {
  title: 'Icon',
  component: Icon
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    icon: 'externalLink',
    size: 16,
    color: 'foreground'
  }
};

export const AllIcons: Story = {
  args: {},
  render: () => <IconsExample />
};
