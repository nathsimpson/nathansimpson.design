import React from 'react';
import { useTheme } from '../src/themecontext';
import { spacing } from '../src/index';

import { Text } from '../../../typography';
import { Stack } from '../../../stack';

export const ColorsExample = () => {
  const { colors } = useTheme();
  const colorsArr: { label: string; value: string }[] = [];

  const generateCards = ({
    parent = '',
    value
  }: {
    parent?: string;
    value: object;
  }) =>
    Object.keys(value).forEach((c: string) => {
      if (typeof value[c] === 'string') {
        colorsArr.push({ label: `${parent}.${c}`, value: value[c] });
      } else {
        generateCards({ parent: `${parent}.${c}`, value: value[c] });
      }
    });

  generateCards({ value: colors });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        gap: spacing.small
      }}
    >
      {colorsArr.map(c => (
        <Color {...c} key={c.label} />
      ))}
    </div>
  );
};

const Color = ({ label, value }) => {
  const { colors } = useTheme();
  return (
    <div
      style={{
        minWidth: 200,
        border: `1px solid ${colors.border}`
      }}
    >
      <div
        style={{
          width: '100%',
          height: 100,
          backgroundColor: value,
          borderBottom: `1px solid ${colors.border}`
        }}
      />

      <Stack gap="xsmall" bg="emphasis" padding="small">
        <Text color="emphasis">{label}</Text>
        <Text size="small">{value.toString()}</Text>
      </Stack>
    </div>
  );
};
