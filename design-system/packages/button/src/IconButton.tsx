import { useTheme } from '@nathsimpson/theme';
import { Icon } from '@nathsimpson/icon';

import { useButtonStyles, IconButtonProps } from './utils';

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
