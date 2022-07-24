/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import { maxWidth, spacing } from '@nathsimpson/theme';

export const ContentContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={{
        maxWidth: maxWidth.content,
        margin: '0 auto',
        paddingLeft: spacing.xxlarge,
        paddingRight: spacing.xxlarge
      }}
    >
      {children}
    </div>
  );
};
