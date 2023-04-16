import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta = {
  title: 'Card',
  component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Design: Story = {
  args: {
    title: 'Title',
    tag: 'Design',
    path: '/',
    image: 'https://files.nathansimpson.design/portfolio/simmo/cover.jpg',
    desc: 'Description'
  }
};

export const Development: Story = {
  args: {
    title: 'hexAlpha',
    tag: 'Development',
    path: '/',
    desc: 'A really simple package that enables you to specify an opacity for your HEX colours.'
  }
};
