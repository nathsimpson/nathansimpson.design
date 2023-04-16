import { ReactNode } from 'react';
import { maxWidth, spacing } from '../../lib/theme';

/** This is a container component that is used to constrain the width of written post content */
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
