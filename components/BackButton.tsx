import { TextLink } from './TextLink';
import { Icon } from './ui/icon';

export const BackButton = ({
  href,
  label
}: {
  href: string;
  label: string;
}) => {
  return (
    <div
      css={{
        display: 'flex',
        a: {
          alignItems: 'center',
          display: 'inline-flex'
        }
      }}
    >
      <TextLink size="large" href={href}>
        <Icon icon="chevronLeft" size={32} />
        {label}
      </TextLink>
    </div>
  );
};
