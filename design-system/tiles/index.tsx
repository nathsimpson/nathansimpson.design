/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement } from 'react';
import { spacing } from '../theme';

export const Tiles = ({ children }: { children: ReactElement[] }) => {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: spacing.large,
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};
