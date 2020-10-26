module.exports = {
  siteName: 'Tairea.io',
  siteDescription: 'A blog of 3 brothers and their technology work',
  icon: './src/assets/images/favicon.png',
  siteUrl: 'https://tairea.io',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-162747350-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/blogPosts/**/*.md',
        typeName: 'Post',
        route: '/posts/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
  ],
  // templates: {
  //   BlogPost: '/blog/:title',
  // },
  css: {
    loaderOptions: {
      scss: {}
    }
  }
} 