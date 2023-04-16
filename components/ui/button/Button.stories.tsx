import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  args: {
    size: 'medium',
    label: 'Button',
    weight: 'primary'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {}
};

export const Secondary: Story = {
  args: {
    weight: 'secondary'
  }
};

export const None: Story = {
  args: {
    weight: 'none'
  }
};

export const Small: Story = {
  args: {
    size: 'small'
  }
};

export const Large: Story = {
  args: {
    size: 'large'
  }
};

export const IconBefore: Story = {
  args: {
    iconBefore: 'plus',
    label: 'Create'
  }
};

export const IconAfter: Story = {
  args: {
    iconAfter: 'chevronRight',
    label: 'Next',
    weight: 'secondary'
  }
};
