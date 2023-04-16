import { useTheme } from '../../../lib/theme';

export const useCardStyles = () => {
  const { boxShadow, radii, colors, spacing, maxWidth } = useTheme();
  return {
    ...boxShadow[1],
    background: colors.background.emphasis,
    padding: spacing.large,
    borderRadius: radii.large,
    maxWidth: maxWidth.content
  };
};
