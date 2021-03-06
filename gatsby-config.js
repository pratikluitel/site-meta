/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Pratik Luitel -- A Blog", //this will appear in the title of your homepage
    author: "Pratik Luitel",
    description: "Former Child, Aspiring Adult", //appears on the header
    site: "https://pratikl.com.np",
    siteDesc:
      "A blog where I share my writings -- stories (fiction and otherwise), poems and some hot takes on things I see around me", //this is for the meta data
    contact: {
      pos_1: {
        //in the font, type the font-awesome icon name. Generally this is the same as the type, but better safe than sorry!
        type: "mail",
        font: "envelope",
        url: "mailto:pluitel11@gmail.com",
      },
      pos_3: {
        type: "instagram",
        font: "instagram",
        url: "https://www.instagram.com/pratik_luitel",
      },
      pos_4: {
        type: "github",
        font: "github",
        url: "https://www.github.com/pratikluitel",
      },
      pos_5: {
        type: "twitter",
        font: "twitter",
        url: "https://www.twitter.com/pratikHluitel",
      },
    },
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/images/img/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#22a39f",
        theme_color: "#22a39f",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icons/favicon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
