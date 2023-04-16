import { Meta, StoryObj } from '@storybook/react';
import { PostCard } from './PostCard';

const meta: Meta = {
  title: 'Blog/PostCard',
  component: PostCard
};

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Post: Story = {
  args: {
    title: 'Title',
    href: '/',
    description: 'Description of the post content',
    date: '2021-01-01',
    type: 'Post'
  }
};

export const Talk: Story = {
  args: {
    title: 'Title',
    href: '/',
    description: 'Description of the post content',
    date: '2021-01-01',
    type: 'Talk'
  }
};
