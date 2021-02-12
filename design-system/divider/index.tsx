/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '../../design-system/theme';

export const Divider = () => {
  return (
    <hr
      css={{
        border: `1px solid ${colors.border}`
      }}
    />
  );
};
