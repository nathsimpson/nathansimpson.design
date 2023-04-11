import { ReactNode } from 'react';
import { maxWidth, spacing } from './design-system/theme';

export const ContentContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={{
        maxWidth: maxWidth.content,
        margin: '0 auto',
        paddingLeft: spacing.xlarge,
        paddingRight: spacing.xlarge,
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};
