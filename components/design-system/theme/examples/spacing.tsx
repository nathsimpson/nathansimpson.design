import React from 'react';
import { Flex, Stack } from '../../box';
import { Text } from '../../typography';
import { useTheme } from '../themecontext';
import { spacing, SpacingType } from '../themes';

export const SpacingExample = () => {
  const spacingKeys = Object.keys(spacing) as SpacingType[];
  return (
    <Stack gap="xxsmall">
      {spacingKeys.map((c) => (
        <Block label={c} key={c} />
      ))}
    </Stack>
  );
};

const Block = ({ label }: { label: SpacingType }) => {
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
