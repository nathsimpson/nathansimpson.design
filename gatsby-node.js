const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = path.resolve('src/templates/project.js');
  const talkTemplate = path.resolve('src/templates/talk.js');
  const postTemplate = path.resolve('src/templates/post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              type
              youtubeid
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = {
        project: projectTemplate,
        talk: talkTemplate,
        post: postTemplate
      }[node.frontmatter.type || 'project'];

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {
          path: node.frontmatter.path
        }
      });
    });
  });
};
