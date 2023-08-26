/**
 * @type {import('gatsby').GatsbyConfig}
 */


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "article",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          author: {
            populate: {
              avatar: "*",
              company: {
                populate: {
                  image: "*",
                },
              },
            },
          },
        },
      },
      queryParams: {
        // Ваши настройки для сущности "work" здесь
        // Например, для настройки локализации:
        locale: "de-AT"
      },
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "work",
      queryParams: {
        populate: {
          TileImage: {
            url: "*",
            alternativeText: "*"
          }
        },
      },
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
  ],
  singleTypes: [],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "http://127.0.0.1:8000",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

module.exports = {
  siteMetadata: {
    title: `DD up`,
    siteUrl: `https://dd-up.at`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    }
  ],
  trailingSlash: "never",
};

