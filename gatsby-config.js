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
        trackingId: "UA-37909733-3",
        head: false,
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        cookieDomain: "nathansimpson.design"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: "projects"
      }
    },
    "gatsby-transformer-remark"

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
