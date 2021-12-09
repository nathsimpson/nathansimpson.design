const React = require('react');
const { Layout } = require('./src/components/layout');
const { Core } = require('./src/components/core');

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    <Core>
      <Layout>{element}</Layout>
    </Core>
  );
};
