import { NextTextLink } from './NextTextLink';
import { Icon } from '@nathsimpson/icon';

export const BackButton = ({ href }: { href: string }) => {
  return (
    <div css={{ display: 'flex' }}>
      <NextTextLink
        size="large"
        href={href}
        css={{
          marginLeft: -32,
          alignItems: 'center',
          display: 'inline-flex'
        }}
      >
        <Icon icon="chevronLeft" size={32} />
        Back
      </NextTextLink>
    </div>
  );
};
