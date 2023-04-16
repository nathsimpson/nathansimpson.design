import { ICONS } from './icons';
import { useTheme } from '../../../lib/theme';

export type IconType = keyof typeof ICONS;

export const Icon = ({
  icon,
  size = 16,
  color
}: {
  icon: IconType;
  size: number; // TODO: fix this
  color?: 'foreground' | 'link'; // TODO: type this
}) => {
  const theme = useTheme();
  const colors = {
    foreground: theme.colors.text.default,
    link: theme.colors.action
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={color ? colors[color] : 'currentColor'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={ICONS[icon]} />
    </svg>
  );
};
