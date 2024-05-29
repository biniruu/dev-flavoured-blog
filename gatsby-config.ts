import type { GatsbyConfig, PluginRef } from 'gatsby'
import 'dotenv/config'

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.mjs
    siteTitle: `할짝 웹 개발`,
    siteTitleAlt: `할짝 웹 개발`,
    siteHeadline: `할짝 웹 개발`,
    siteUrl: `https://biniruu.github.io/dev-flavoured-blog`,
    siteDescription: `맛만 보는 웹 개발`,
    siteImage: `/banner.jpg`,
    siteLanguage: `ko`,
    author: `biniruu`,
  },
  trailingSlash: `never`,
  pathPrefix: '/dev-flavoured-blog',
  plugins: [
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          // {
          //   title: `About`,
          //   slug: `/about`,
          // },
        ],
        // externalLinks: [
        //   {
        //     name: `Twitter`,
        //     url: `https://twitter.com/lekoarts_de`,
        //   },
        //   {
        //     name: `Homepage`,
        //     url: `https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter`,
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/dev-flavoured-blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `할짝 웹 개발`,
        short_name: `할짝 웹 개발`,
        description: `맛만 보는 웹 개발`,
        start_url: `/dev-flavoured-blog`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allPost },
            }: {
              query: { allPost: IAllPost; site: { siteMetadata: ISiteMetadata } }
            }) =>
              allPost.nodes.map(post => {
                const { slug, excerpt, title, date } = post
                const url = site.siteMetadata.siteUrl + slug
                const content = `<p>${excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title,
                  date,
                  excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': content }],
                }
              }),
            query: `{
              allPost(sort: {date: DESC}) {
                nodes {
                  title
                  date(formatString: "MMMM D, YYYY")
                  excerpt
                  slug
                }
              }
            }`,
            output: `rss.xml`,
            title: `할짝 웹 개발`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config

interface IPostTag {
  name: string
  slug: string
}

interface IPost {
  slug: string
  title: string
  defer: boolean
  date: string
  excerpt: string
  contentFilePath: string
  html: string
  timeToRead: number
  wordCount: number
  tags: Array<IPostTag>
  banner: any
  description: string
  canonicalUrl: string
}

interface IAllPost {
  nodes: Array<IPost>
}

interface ISiteMetadata {
  siteTitle: string
  siteTitleAlt: string
  siteHeadline: string
  siteUrl: string
  siteDescription: string
  siteImage: string
  author: string
}
