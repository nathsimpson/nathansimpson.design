import React from 'react';

import { useTheme } from '../src/themecontext';
import { Stack } from '../../../stack';
import { Text } from '../../../typography';

export const RadiiExample = () => {
  const { radii } = useTheme();
  return (
    <Stack gap="small">
      {Object.keys(radii).map(c => (
        <Block label={c} key={c} />
      ))}
    </Stack>
  );
};

const Block = ({ label }) => {
  const { colors, spacing, radii } = useTheme();
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
      <Text>{`${label} (${radii[label].toString()})`}</Text>
    </Stack>
  );
};
