import React from 'react';
import { ICONS } from './icons';
import { colors } from '../theme';

export const Icon = ({
  icon,
  size = 16,
  color
}: {
  icon: keyof typeof ICONS;
  size: number; // TODO: fix this
  color?: 'foreground' | 'link'; // TODO: type this
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={color ? colors[color] : 'currentColor'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={ICONS[icon]} />
    </svg>
  );
};
