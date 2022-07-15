/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '@nathsimpson/theme';

export const Container = ({ as: Tag = 'div', ...props }) => {
  const { spacing } = useTheme();
  return (
    <Tag
      css={{
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
