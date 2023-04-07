import { Flex, Stack } from '../box';
import { RadiiType } from '../themes';
import { useTheme } from '../themecontext';

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
