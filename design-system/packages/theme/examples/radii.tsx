import React from 'react';
import { Stack } from '@nathsimpson/box';

import { useTheme } from '../src/themecontext';

export const RadiiExample = () => {
  const { radii } = useTheme();
  return (
    <Stack gap="small">
      {Object.keys(radii).map((c) => (
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
      <p>{`${label} (${radii[label].toString()})`}</p>
    </Stack>
  );
};
