import React from 'react';
import { colors } from './colors';
import { spacing } from './index';

export const ColorsExample = () => {
  const colorsArr: { label: string; value: string }[] = [];

  const generateCards = ({
    parent = '',
    value
  }: {
    parent?: string;
    value: object;
  }) =>
    Object.keys(value).forEach((c: string) => {
      console.log(c);
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
          border: `1px solid ${colors.border}`
        }}
      />

      <div
        style={{
          padding: spacing.xsmall,
          backgroundColor: colors.backgroundEmphasis
        }}
      >
        <p>{label}</p>
        <p>Hex: {value.toString()}</p>
      </div>
    </div>
  );
};
