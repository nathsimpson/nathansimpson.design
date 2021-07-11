const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve('src/templates/project.js');
  const talkTemplate = path.resolve('src/templates/talk.js');
  const postTemplate = path.resolve('src/templates/post.js');
  const designSystemTemplate = path.resolve('src/templates/designSystem.js');

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
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    const mdx = res.data.allMdx.edges;

    mdx.forEach(({ node }) => {
      const template = {
        'design-system': designSystemTemplate,
        project: projectTemplate,
        talk: talkTemplate,
        post: postTemplate
      }[node.frontmatter.type || 'project'];

      createPage({
        path: node.frontmatter.path,
        component: template
      });
    });
  });
};
