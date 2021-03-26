module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "Some description",
    something_from_me: "This is from me"
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-plugin-sass",
    }
  ],
};
