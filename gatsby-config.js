module.exports = {
  siteMetadata: {
    title: 'Thomasorus, front-end dev & journalist',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/files/images/`
      }
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          ".scss": {
            syntax: `postcss-scss`
          },
        },

        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
      },
    },
  ],
}