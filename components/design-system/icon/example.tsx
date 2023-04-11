import { Text } from '../typography';
import { useMediaQuery } from '../utils';
import { Stack } from '../box';

import { spacing } from '../theme';
import { Icon } from './index';
import { ICONS } from './icons';

export const IconsExample = () => {
  const { mq } = useMediaQuery();
  return (
    <div
      css={mq({
        display: 'grid',
        gridTemplateColumns: [
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)'
        ],
        width: '100%',
        gap: spacing.medium
      })}
    >
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map((c) => (
        <IconExample icon={c} key={c} />
      ))}
    </div>
  );
};

const IconExample = ({ icon }: { icon: keyof typeof ICONS }) => (
  <Stack
    alignItems="center"
    bg="emphasis"
    gap="xsmall"
    paddingY="large"
    rounding="medium"
  >
    <Icon icon={icon} size={32} />
    <Text as="span">{icon}</Text>
  </Stack>
);
