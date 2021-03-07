import React from 'react';

import { colors, spacing, radii } from '../index';
import { Stack } from '../../stack';
import { Text } from '../../typography';

export const RadiiExample = () => {
  return (
    <Stack gap="small">
      {Object.keys(radii).map(c => (
        <Block label={c} key={c} />
      ))}
    </Stack>
  );
};

const Block = ({ label }) => {
  return (
    <Stack orientation="horizontal" align="center" gap="small">
      <div
        style={{
          width: spacing.xxxlarge,
          height: spacing.xxxlarge,
          borderRadius: radii[label],
          backgroundColor: colors.brand
        }}
      />
      <Text>{`${label} (${spacing[label].toString()})`}</Text>
    </Stack>
  );
};
