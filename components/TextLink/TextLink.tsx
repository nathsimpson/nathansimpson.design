import Link, { LinkProps } from 'next/link';

import type { FontSizeType } from '../design-system/theme';
import { ReactNode, AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { useLinkStyles } from './useLinkStyles';

type TextLinkProps = PropsWithChildren<LinkProps> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    size?: FontSizeType;
  };

export const TextLink = ({ size, href, ...props }: TextLinkProps) => {
  const styles = useLinkStyles({ size });

  if (!href) {
    return <a css={styles} {...props} />;
  }

  // Use an `a` tag when linking externally
  if (href?.startsWith('http')) {
    return <a css={styles} {...props} />;
  }

  return <Link href={href} css={styles} {...props} />;
};

type NextLinkProps = LinkProps & {
  children: ReactNode;
  size?: FontSizeType;
};

export const NextLink = ({ size, href, ...props }: NextLinkProps) => {
  const styles = useLinkStyles({ size });
  return <Link href={href} css={styles} {...props} />;
};
