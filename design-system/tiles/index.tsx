/** @jsxImportSource @emotion/react */
import { ReactElement } from 'react';
import { useTheme } from '@nathsimpson/theme';

export const Tiles = ({ children }: { children: ReactElement[] }) => {
  const { spacing } = useTheme();
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
