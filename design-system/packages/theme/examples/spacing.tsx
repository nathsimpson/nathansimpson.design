import React from 'react';
import { Stack } from '@nathsimpson/box';
import { useTheme } from '../src/themecontext';
import { spacing } from '../src/index';

export const SpacingExample = () => {
  return (
    <Stack gap="small">
      {Object.keys(spacing).map((c) => (
        <Block label={c} key={c} />
      ))}
    </Stack>
  );
};

const Block = ({ label }) => {
  const { colors, spacing } = useTheme();
  return (
    <Stack orientation="horizontal" align="center" gap="small">
      <div
        style={{
          width: spacing[label],
          height: spacing.xlarge,
          backgroundColor: colors.brand
        }}
      />

      <p>{`${label} (${spacing[label].toString()})`}</p>
    </Stack>
  );
};
