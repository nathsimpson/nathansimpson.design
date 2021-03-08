import React from 'react';
import { spacing } from '../../design-system/theme';

export const Container = ({ ...props }) => {
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
