/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import { ThemeProvider, useTheme } from '@nathsimpson/theme';

const PlayroomLayout = ({ children }) => {
  const { colors, fontsizes, fontFamilies } = useTheme();
  return (
    <div>
      <Global
        styles={{
          body: {
            fontSize: fontsizes.medium,
            margin: 0,
            padding: 0,
            fontFamily: fontFamilies.body,
            color: colors.text.default,
            backgroundColor: colors.background.default
          }
        }}
      />
      {children}
    </div>
  );
};

export default function FrameComponent({ theme, children }) {
  return (
    <ThemeProvider>
      <PlayroomLayout>{children}</PlayroomLayout>
    </ThemeProvider>
  );
}
