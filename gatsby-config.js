const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: "Bohdan Martyniuk",
    description:
      "Bohdan Martyniuk is a software engineer who specializes in building web-applications.",
    siteUrl: `https://gallant-euclid-bbef8a.netlify.app`,
    image: "/intro.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    // "gatsby-plugin-postcss",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "BohdanMartyniuk",
    //     short_name: "BohdanMartyniuk",
    //     start_url: "/",
    //     background_color: "#151617",
    //     display: "minimal-ui",
    //     icon: "src/images/LogoMakr-3Abh9q.png",
    //   },
    // },
  ],
};
