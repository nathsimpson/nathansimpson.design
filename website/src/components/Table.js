/** @jsxImportSource @emotion/react */
import { useTheme } from '@nathsimpson/theme';

export const Table = props => {
  return (
    <table
      css={{
        // border: `1px solid ${colors.border}`,
        // border: 'none',
        // borderCollapse: 'collapse',
        width: '100%'
      }}
      {...props}
    />
  );
};

export const TableHead = props => {
  const { fontFamilies, colors } = useTheme();
  return (
    <thead
      css={{
        textAlign: 'left',
        fontFamily: fontFamilies.heading,
        color: colors.text.emphasis
      }}
      {...props}
    />
  );
};

export const TableRow = props => {
  const { colors } = useTheme();
  return (
    <tr
      css={{
        // paddingTop: spacing.small,
        // paddingBottom: spacing.small,
        borderBottom: `1px solid ${colors.global.border}`
      }}
      {...props}
    />
  );
};

export const TableCell = props => {
  const { colors, spacing } = useTheme();
  return (
    <td
      css={{
        paddingTop: spacing.small,
        paddingBottom: spacing.small,
        borderBottom: `1px solid ${colors.global.border}`
      }}
      {...props}
    />
  );
};
