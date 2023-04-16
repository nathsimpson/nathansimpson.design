import { ReactNode } from 'react';

export const DribbbleGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridColumnGap: 16,
        gridRowGap: 16,
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};
