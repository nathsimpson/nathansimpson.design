import { PropsWithChildren, ElementType } from 'react';
import { spacing, maxWidth as maxWidthTokens } from '../design-system/theme';

type ContainerProps = PropsWithChildren<{
  as?: ElementType;
}>;

export const Container = ({ as: Tag = 'div', children }: ContainerProps) => {
  return (
    <Tag
      css={{
        width: '100%',
        maxWidth: maxWidthTokens.page,
        paddingLeft: spacing.medium,
        paddingRight: spacing.medium,
        margin: '0 auto'
      }}
    >
      {children}
    </Tag>
  );
};
