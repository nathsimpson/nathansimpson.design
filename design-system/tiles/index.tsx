/** @jsx jsx */
import { jsx } from '@emotion/core';

export const Tiles = props => {
  return (
    <div
      css={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 12
      }}
      {...props}
    />
  );
};
