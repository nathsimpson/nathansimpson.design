/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon } from '@nathsimpson/icon';

import { useButtonStyles, ButtonProps, iconSizes } from './utils';

export const Button = ({
  label,
  iconBefore,
  iconAfter,
  size = 'medium',
  weight = 'primary',
  ...props
}: ButtonProps & {
  onClick: () => void;
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
