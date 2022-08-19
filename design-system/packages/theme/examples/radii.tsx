import { Flex, Stack } from '@nathsimpson/box';

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

const Block = ({ label }: { label: string }) => {
  const { colors, spacing, radii } = useTheme();
  return (
    <Flex alignItems="center" gap="small">
      <div
        style={{
          width: spacing.xxlarge,
          height: spacing.xxlarge,
          borderRadius: radii[label],
          backgroundColor: colors.brand
        }}
      />
      <p>{`${label} (${radii[label].toString()})`}</p>
    </Flex>
  );
};
