import { useTheme } from '@nathsimpson/theme';

export const Divider = () => {
  const { colors } = useTheme();
  return (
    <hr
      css={{
        border: 'none',
        borderBottom: `1px solid ${colors.border}`,
        width: '100%',
        margin: 0
      }}
    />
  );
};
