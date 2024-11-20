/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Project Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',  
      },
    },
    'gatsby-transformer-sharp', 
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "DrupalGraqhQL",
        // This is field under which it's accessible 
        fieldName: "Drupal",
        // Url to query from
        // url: "http://kecatalog.dev.wwbtc.com/graphql",
        //  url: `http://10.89.0.11/graphql`,
        // url: `https://api.keeneland.com/graphql`,
        // url: "http://10.89.0.24/graphql",
        // https://swapi-graphql.netlify.app/.netlify/functions/index star wars
        // https://countries.trevorblades.com/ countrues
        url: `https://swapi-graphql.netlify.app/.netlify/functions/index`,
      },
    },
  ],
}
