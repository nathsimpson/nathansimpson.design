import Link, { LinkProps } from 'next/link';

import type { FontSizeType } from './ui/theme';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { useLinkStyles } from './ui/styles/useLinkStyles';

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
