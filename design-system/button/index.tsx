/** @jsxImportSource @emotion/react */
import { useTheme } from '@nathsimpson/theme';
import { Icon } from '@nathsimpson/icon';

import { useButtonStyles, ButtonProps, IconButtonProps } from './utils';

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

export const IconButton = ({
  label,
  icon,
  size = 'medium',
  weight = 'primary',
  ...props
}: IconButtonProps) => {
  const buttonStyles = useButtonStyles({ size, weight });
  const { radii, spacing } = useTheme();

  const iconSizeMap = {
    small: 20,
    medium: 24,
    large: 32
  };

  return (
    <button
      css={{
        ...buttonStyles,
        borderRadius: radii.circle,
        padding: spacing[size] / 2
      }}
      type="button"
      aria-label={label}
      {...props}
    >
      <Icon size={iconSizeMap[size]} icon={icon} />
    </button>
  );
};
