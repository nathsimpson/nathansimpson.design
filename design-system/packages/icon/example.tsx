/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMediaQuery } from '@nathsimpson/utils';

import { Stack } from '../../stack';
import { spacing } from '../theme';
import { Text } from '../../typography';
import { Icon } from './src/index';
import { ICONS } from './src/icons';

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
    align="center"
    bg="emphasis"
    gap="medium"
    paddingY="large"
    rounding="medium"
  >
    <Icon icon={icon} size={32} />
    <Text>{icon}</Text>
  </Stack>
);
