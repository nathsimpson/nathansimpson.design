import { Icon } from '@nathsimpson/icon';

import { useButtonStyles, ButtonProps, iconSizes } from './utils';

export const LinkButton = ({
  label,
  iconAfter,
  iconBefore,
  size = 'medium',
  weight = 'primary',
  href,
  ...props
}: ButtonProps & {
  href: string;
}) => {
  const styles = useButtonStyles({ size, weight });
  return (
    <a css={styles} href={href} {...props}>
      {iconBefore && <Icon size={iconSizes[size]} icon={iconBefore} />}
      {label}
      {iconAfter && <Icon size={iconSizes[size]} icon={iconAfter} />}
    </a>
  );
};
