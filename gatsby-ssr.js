const React = require('react');
const { Layout } = require('./src/components/layout');
const {
  ThemeProvider,
  themeLight,
  themeDark
} = require('./design-system/theme');
const { selectedThemeTokenName } = require('./src/data');

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  const selectedTheme = localStorage.getItem(selectedThemeTokenName);

  if (!selectedTheme) {
    localStorage.setItem(selectedThemeTokenName, 'dark');
  }

  const theme = selectedTheme === 'light' ? themeLight : themeDark;

  return (
    <ThemeProvider theme={theme}>
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
