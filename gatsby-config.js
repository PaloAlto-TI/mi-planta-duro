
module.exports = {
  siteMetadata: {
    title: `Mi Planta`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Mi Planta - DURO`,
        short_name: `Mi Planta`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/palo_alto_favicon.png`, // This path is relative to the root of the site.
      },
      
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
        appendScript: require.resolve(`./custom-sw-code.js`),
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAQrvr1MD1k7qiUvO2YKtP3GBT9aSth_z4",
          authDomain: "miplanta.firebaseapp.com",
          projectId: "miplanta",
          storageBucket: "miplanta.appspot.com",
          messagingSenderId: "368301501386",
          appId: "1:368301501386:web:af3f7e84d645f6b202fd33",
          measurementId: "G-R8WZ45YDKK"
        },
      }
    },

    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./miplanta-firebase.json"),
        types: [
          {
            type: 'Users',
            collection: 'users',
            map: doc => ({
              user_id: doc.user_id,
              role: doc.role,
              nombre: doc.nombre
            }),
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },

  
  ],
}
