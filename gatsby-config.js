const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Storyblok CMS setup`,
    description: `...`,
    author: `Jay Werra`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:100,200,300,400,600,700`,
          `dm mono\:300,400,400,500,600`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.STORYBLOK_API,
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        localAssets: true,
      }
    },
  ],
}
