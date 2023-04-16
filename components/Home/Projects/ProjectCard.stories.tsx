import { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

const meta: Meta = {
  title: 'Home/ProjectCard',
  component: ProjectCard
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

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
