import { useTheme } from './design-system/theme';
import { ReactNode } from 'react';

type PropsWithOnlyChildren = {
  children: ReactNode;
};

export const Table = (props: PropsWithOnlyChildren) => {
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

export const TableHead = (props: PropsWithOnlyChildren) => {
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

export const TableRow = (props: PropsWithOnlyChildren) => {
  const { colors } = useTheme();
  return (
    <tr
      css={{
        // paddingTop: spacing.small,
        // paddingBottom: spacing.small,
        borderBottom: `1px solid ${colors.border}`
      }}
      {...props}
    />
  );
};

export const TableCell = (props: PropsWithOnlyChildren) => {
  const { colors, spacing } = useTheme();
  return (
    <td
      css={{
        paddingTop: spacing.small,
        paddingBottom: spacing.small,
        borderBottom: `1px solid ${colors.border}`
      }}
      {...props}
    />
  );
};
