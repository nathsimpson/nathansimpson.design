import React from 'react';
import { useTheme } from '@nathsimpson/theme';

export const Container = ({ ...props }) => {
  const { spacing } = useTheme();
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1300px',
        paddingLeft: spacing.xlarge,
        paddingRight: spacing.xlarge,
        padding: '0 24px',
        margin: '0 auto',
        boxSizing: 'border-box'
      }}
      {...props}
    />
  );
};
