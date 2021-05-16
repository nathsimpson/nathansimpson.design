module.exports = {
  siteMetadata: {
    title: `Nathan Simpson - Designer + Frontend Developer`,
    description: `I am a UX Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype.`,
    author: `@nathansimpson95`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
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
        path: `${__dirname}/design-system`,
        name: 'design-system'
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
        theme_color: `#fa6d01`,
        display: 'standalone',
        icon: 'src/images/icon.svg',
        include_favicon: false, // exclude favicons
        icons: [
          {
            src: `/apple-touch-icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `/apple-touch-icon-167x167.png`,
            sizes: `167x167`,
            type: `image/png`
          },
          {
            src: `/apple-touch-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`
          }
        ]
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
