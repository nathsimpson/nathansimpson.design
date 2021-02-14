/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '../../design-system/theme';

export const Divider = () => {
  return (
    <hr
      css={{
        border: 'none',
        borderBottom: `1px solid ${colors.border}`,
        width: '100%',
        margin: 0
      }}
    />
  );
};
