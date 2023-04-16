import { PropsWithChildren, ElementType } from 'react';
import { spacing, maxWidth as maxWidthTokens } from '../design-system/theme';

type ContainerProps = PropsWithChildren<{
  as?: ElementType;
}>;

// This is a container component that is used to constrain the width of a page
export const PageContainer = ({
  as: Tag = 'div',
  children
}: ContainerProps) => {
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
