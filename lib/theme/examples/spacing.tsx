import React from 'react';
import { Flex, Stack } from '../../../components/ui/box';
import { Text } from '../../../components/ui/typography';
import { useTheme } from '../useTheme';
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
