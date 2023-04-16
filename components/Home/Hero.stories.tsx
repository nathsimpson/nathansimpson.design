import { Hero } from './Hero';
import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Home/Hero',
  component: Hero
};

export default meta;

export const Basic = () => <Hero />;
