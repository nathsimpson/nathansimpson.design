import { TextLink } from './TextLink';
import { Icon } from './design-system/icon';

export const BackButton = ({ href }: { href: string }) => {
  return (
    <div
      css={{
        display: 'flex',
        a: {
          marginLeft: -32,
          alignItems: 'center',
          display: 'inline-flex'
        }
      }}
    >
      <TextLink size="large" href={href}>
        <Icon icon="chevronLeft" size={32} />
        Back
      </TextLink>
    </div>
  );
};
