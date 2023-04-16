import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta = {
  title: 'Header',
  component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

const Basic: Story = {};
