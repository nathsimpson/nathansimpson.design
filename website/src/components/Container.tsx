/** @jsx jsx */
import { jsx } from '@emotion/core';
import { PropsWithChildren, ElementType } from 'react';
import {
  spacing,
  maxWidth as maxWidthTokens,
  MaxWidthType
} from '@nathsimpson/theme';

type ContainerProps = PropsWithChildren<{
  as?: ElementType;
  maxWidth?: MaxWidthType;
}>;

export const Container = ({
  as: Tag = 'div',
  children,
  maxWidth = 'page'
}: ContainerProps) => {
  return (
    <Tag
      css={{
        width: '100%',
        maxWidth: maxWidthTokens[maxWidth],
        paddingLeft: spacing.xlarge,
        paddingRight: spacing.xlarge,
        margin: '0 auto',
        boxSizing: 'border-box'
      }}
    >
      {children}
    </Tag>
  );
};
