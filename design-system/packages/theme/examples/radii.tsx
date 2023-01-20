import { Flex, Stack } from '@nathsimpson/box';
import { RadiiType } from '../src/themes';
import { useTheme } from '../src/themecontext';

export const RadiiExample = () => {
  const { radii } = useTheme();
  const radiiKeys = Object.keys(radii) as RadiiType[];
  return (
    <Stack gap="small">
      {radiiKeys.map((c) => (
        <Block label={c} key={c} />
      ))}
    </Stack>
  );
};

const Block = ({ label }: { label: RadiiType }) => {
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
