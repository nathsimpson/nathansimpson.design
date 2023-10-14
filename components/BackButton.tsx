import { TextLink } from './TextLink';
import { Icon } from './ui/icon';

export const visuallyHiddenStyles = {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1
} as const;

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
        <span css={visuallyHiddenStyles}>Back to </span>
        {label}
      </TextLink>
    </div>
  );
};
