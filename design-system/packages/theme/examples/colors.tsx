/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Stack } from '@nathsimpson/box';
import { useTheme } from '../src/themecontext';
import { spacing } from '../src/index';

import { getContrastColor, getWcagScore } from 'hex-a11y';

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
      {colorsArr.map((c) => (
        <Color {...c} key={c.label} />
      ))}
    </div>
  );
};

const Color = ({ label, value }: { label: string; value: string }) => {
  const { colors, fontSizes } = useTheme();
  const wcagText = getContrastColor(value);

  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        width: '100%',
        backgroundColor: value,
        color: wcagText,
        boxSizing: 'border-box'
      }}
    >
      <Stack gap="xsmall" padding="medium">
        <span css={{ fontWeight: 600 }}>{label}</span>
        <span css={{ fontSize: fontSizes.small }}>{value.toString()}</span>
        <div>
          <span css={{ color: colors.text.default }}>
            {getWcagScore(value, colors.text.default)}
          </span>{' '}
          <span css={{ color: colors.text.emphasis }}>
            {getWcagScore(value, colors.text.emphasis)}
          </span>{' '}
          <span css={{ color: wcagText }}>{getWcagScore(value, wcagText)}</span>
        </div>
      </Stack>
    </div>
  );
};
