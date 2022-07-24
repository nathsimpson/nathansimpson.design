/** @jsx jsx */
import { jsx } from '@emotion/core';
import { spacing, maxWidth } from '@nathsimpson/theme';

export const Container = ({ as: Tag = 'div', ...props }) => {
  return (
    <Tag
      css={{
        width: '100%',
        maxWidth: maxWidth.page,
        paddingLeft: spacing.xlarge,
        paddingRight: spacing.xlarge,
        margin: '0 auto',
        boxSizing: 'border-box'
      }}
      {...props}
    />
  );
};
