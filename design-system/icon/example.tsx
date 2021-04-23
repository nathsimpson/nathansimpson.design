import React from 'react';
import { Stack } from '../stack';
import { spacing } from '../theme';
import { Text } from '../typography';
import { Icon } from './index';
import { ICONS } from './icons';

export const IconsExample = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '100%',
        gap: spacing.small
      }}
    >
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map(c => (
        <IconExample icon={c} key={c} />
      ))}
    </div>
  );
};

const IconExample = ({ icon }: { icon: keyof typeof ICONS }) => (
  <Stack gap="medium" align="center">
    <Icon icon={icon} size={32} />
    <Text>{icon}</Text>
  </Stack>
);
