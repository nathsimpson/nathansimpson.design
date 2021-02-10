import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const components = {
  // pre: props =>
  //   console.log(props) || (
  //     <LiveProvider code={props.children.props.children} {...props}>
  //       <LiveEditor />
  //       <LiveError />
  //       <LivePreview />
  //     </LiveProvider>
  //   )
  pre: props => console.log(props) || <pre {...props} />
};

export const Mdx = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};
