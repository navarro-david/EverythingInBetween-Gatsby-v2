// Place your own Buzzsrout Token and PodID in file called keys.js. Place keys.js in the root of the project.
const keys = require('./keys.js');

// TODO: Update SiteURL
const siteUrl = 'https://chancethedev.com';

module.exports = {
  siteMetadata: {
    title: 'Everything In Between',
    siteUrl,
    description: `Everything in Between is a Christian podcast where we sit down with a variety of people to discuss stories, beliefs, theology, and everything in between. Our mission is to have a conversation with people that have varying opinions and beliefs, and maybe even shorten the distance between us. `,
    author: `@navarro-david`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
        appName: null,
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f64861',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-buzzsprout',
      options: {
        token: keys.buzzsproutToken,
        podcastId: keys.buzzsproutPodID,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
            },
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'IBM+Plex+Mono:300,300i',
          'IBM+Plex+Sans:300,300i,500,500i',
          'Pragati+Narrow:700',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {},
    },
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-netlify',
  ],
};
