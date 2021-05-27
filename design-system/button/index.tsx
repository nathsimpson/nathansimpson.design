/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon } from '../icon';

import { useButtonStyles, ButtonProps } from './utils';

const iconSizes = {
  small: 17,
  medium: 19,
  large: 24
};

export const Button = ({
  label,
  iconBefore,
  iconAfter,
  size = 'medium',
  weight = 'primary',
  ...props
}: ButtonProps & {
  onPress: () => void;
}) => {
  const styles = useButtonStyles({ size, weight });

  return (
    <button css={styles} type="button" {...props}>
      {iconBefore && <Icon size={iconSizes[size]} icon={iconBefore} />}
      {label}
      {iconAfter && <Icon size={iconSizes[size]} icon={iconAfter} />}
    </button>
  );
};

export const LinkButton = ({
  label,
  iconAfter,
  iconBefore,
  size = 'medium',
  weight = 'primary',
  href,
  ...props
}: ButtonProps & {
  href: 'string';
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
