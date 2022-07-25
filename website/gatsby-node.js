const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const projectTemplate = path.resolve('src/templates/project.js');
  const postTemplate = path.resolve('src/templates/post.js');
  const designSystemTemplate = path.resolve('src/templates/designSystem.js');

  const { createPage } = actions;

  const templates = {
    'design-system': designSystemTemplate,
    project: projectTemplate,
    post: postTemplate,
    talk: postTemplate
  };

  return graphql(`
    {
      allMdx {
        edges {
          node {
            body
            id
            frontmatter {
              path
              title
              type
              youtubeid
              skills
              updated
              date
              imagesrc
              tag
              desc
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    const mdx = res.data.allMdx.edges;

    mdx.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: templates[node.frontmatter.type || 'project']
      });
    });
  });
};
