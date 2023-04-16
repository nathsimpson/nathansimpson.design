import { HomeHero } from './HomeHero';
import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Home/HomeHero',
  component: HomeHero
};

export default meta;

export const Basic = () => <HomeHero />;
