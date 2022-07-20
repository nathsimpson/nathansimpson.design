const React = require('react');
const { Layout } = require('./src/components/layout');
const { Core } = require('./src/components/core');

require('prismjs/themes/prism-solarizedlight.css');

// Wraps every page in a component
exports.wrapPageElement = ({ element }) => {
  return (
    <Core>
      <Layout>{element}</Layout>
    </Core>
  );
};
