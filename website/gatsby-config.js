const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Nathan Simpson - Designer + Frontend Developer`,
    description: `I am a UX Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype.`,
    author: `@nathansimpson95`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-37909733-3',
        head: false,
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        cookieDomain: 'nathansimpson.design'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'content'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../design-system`,
        name: 'design-system'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/templates/project.js'),
          'design-system': require.resolve('./src/components/designSystem.js')
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nathan Simpson : Designer + Developer',
        short_name: 'Nathan',
        start_url: `/`,
        background_color: '#13171a',
        theme_color: '#13171a',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@design-system': path.resolve(__dirname, '../design-system')
        },
        extensions: []
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
