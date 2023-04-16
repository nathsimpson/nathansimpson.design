import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta = {
  title: 'IconButton',
  component: IconButton,
  args: {
    size: 'medium',
    weight: 'primary'
  }
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  args: {
    icon: 'plus'
  }
};
