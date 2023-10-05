/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter For ESRAA`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@EsraaMurry`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: 'Esraa Murry',
      company: 'Student',
      address: '9572 west prairie grass way'
    }
  },
    plugins: [
      'gatsby-plugin-image',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: 'YOUR SPACE ID',
          accessToken: 'YOUR ACCESS TOKEN',
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
    ],
  };
  