/** @jsx jsx */
import { jsx } from '@emotion/core';
import { PropsWithChildren, ElementType } from 'react';
import { spacing, maxWidth as maxWidthTokens } from '@nathsimpson/theme';

type ContainerProps = PropsWithChildren<{
  as?: ElementType;
}>;

export const Container = ({ as: Tag = 'div', children }: ContainerProps) => {
  return (
    <Tag
      css={{
        width: '100%',
        maxWidth: maxWidthTokens.page,
        paddingLeft: spacing.xlarge,
        paddingRight: spacing.xlarge,
        margin: '0 auto'
      }}
    >
      {children}
    </Tag>
  );
};
