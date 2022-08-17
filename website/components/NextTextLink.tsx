import Link, { LinkProps } from 'next/link';
import { useLinkStyles } from '@nathsimpson/text-link';
import type { FontSizeType } from '@nathsimpson/theme';

type NextTextLinkProps = LinkProps & {
  size?: FontSizeType;
};

export const NextTextLink = ({ size, href, ...props }: NextTextLinkProps) => {
  const styles = useLinkStyles({ size });
  return (
    <Link href={href}>
      <a css={styles} {...props} />
    </Link>
  );
};