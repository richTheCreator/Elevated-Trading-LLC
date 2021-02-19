var proxy = require('http-proxy-middleware')
var website = require('./src/components/SEO/config')

// const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix
const {
  NODE_ENV,
  GOOGLE_ANALYTICS_TRACKING_ID,
  URL: NETLIFY_SITE_URL = 'https://www.elevatedtrading.com/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
module.exports = {
  siteMetadata: {
    siteUrl: website.url, // For gatsby-plugin-sitemap
    // pathPrefix,
    title: website.title,
    description: website.description,
    banner: website.banner,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    // titleAlt: website.titleAlt,
    // headline: website.headline,
    // twitter: website.twitter,
    // facebook: website.facebook,
    menuLinks: [
      {
        name: 'PRODUCTS',
        link: '/products'
      },
      {
        name: 'HEMP STARTER KIT',
        link: '/starter-kit'
      },
      {
        name: 'LAB RESULTS',
        link: '/lab-results'
      },
      {
        name: 'POLICIES',
        link: '/policies'
      },
      {
        name: 'BLOG',
        link: '/blog'
      }
    ]
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: GOOGLE_ANALYTICS_TRACKING_ID || 'none',
        // this option places the tracking script into the head of the DOM
        head: true
        // other options
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/products`,
        name: 'products'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              // withWebp: true,
              linkImagesToOriginal: false, // Important!
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-images-medium-zoom', // Important!
            options: {
              background: 'rgba(0, 0, 0, 0.90)'
            }
          },
          'gatsby-remark-images-grid',
          // '@pauliescanlon/gatsby-remark-grid-system',
          'gatsby-remark-relative-images'
          // {
          //   resolve: 'gatsby-remark-copy-linked-files',
          //   options: {
          //     destinationDir: 'static'
          //   }
          // },
        ]
      }
    },
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Fortika'],
          // urls: ['/fonts/fonts.css']
        },
        google: {
          families: ['Poppins:400,400i,700,700i']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/img/svg` // See below to configure properly
        }
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': ''
        }
      })
    )
  }
}
