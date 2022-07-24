import React from 'react';
import { Flex, Stack } from '@nathsimpson/box';
import { Text } from '@nathsimpson/typography';
import { useTheme } from '../src/themecontext';
import { spacing } from '../src/index';

export const SpacingExample = () => {
  return (
    <Stack gap="xxsmall">
      {Object.keys(spacing).map((c) => (
        <Block label={c} key={c} />
      ))}
    </Stack>
  );
};

const Block = ({ label }) => {
  const { colors, spacing } = useTheme();
  const formattedLabel = `${label} (${spacing[label].toString()})`;
  return (
    <Flex alignItems="center" gap="small">
      <div
        style={{
          width: spacing[label],
          height: spacing.xlarge,
          backgroundColor: colors.brand
        }}
      />
      <Text as="span">{formattedLabel}</Text>
    </Flex>
  );
};
