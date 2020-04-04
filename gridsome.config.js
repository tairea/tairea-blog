module.exports = {
  siteName: 'Tairea.io',
  siteDescription: 'A tech crew in Aotearoa',
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
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}