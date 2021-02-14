import React from 'react';
import { colors } from './colors';
import { spacing } from './index';

export const ColorsExample = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        gap: spacing.small
      }}
    >
      {Object.keys(colors).map(c => (
        <Color name={c} color={colors[c]} key={c} />
      ))}
    </div>
  );
};

const Color = ({ name, color }) => {
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
          backgroundColor: color,
          border: `1px solid ${colors.border}`
        }}
      />

      <div
        style={{
          padding: spacing.xsmall,
          backgroundColor: colors.backgroundEmphasis
        }}
      >
        <p>{name}</p>
        <p>Hex: {color.toString()}</p>
      </div>
    </div>
  );
};
