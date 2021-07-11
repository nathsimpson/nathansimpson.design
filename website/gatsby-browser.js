const React = require('react');
const { Layout } = require('./src/components/layout');
const { ThemeProvider } = require('./design-system/theme');

require('prismjs/themes/prism-solarizedlight.css');

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider>
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
