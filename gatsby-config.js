const autoprefixer = require('autoprefixer');

module.exports = {
    // siteMetadata: {
    //   title: `GatsbyJS`,
    //   description: `A fantastic new static site generator.`,
    //   siteUrl: `https://www.gatsbyjs.org`
    // },  
    plugins: [{
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
                postCssPlugins: [
                    autoprefixer()
                ],
                precision: 8
            }
        },
        `gatsby-plugin-netlify`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-110088221-1"
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Javier Ignacio as a Service",
                short_name: "JiaaS",
                start_url: "/",
                background_color: "#f7f0eb",
                theme_color: "#3998cf",
                display: "minimal-ui",
                icons: [{
                        // Everything in /static will be copied to an equivalent
                        // directory in /public during development and build, so
                        // assuming your favicons are in /static/favicons,
                        // you can reference them here
                        src: `/favicon.ico`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon.ico`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        }
    ]
}