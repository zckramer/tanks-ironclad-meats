rules: [
    //...
    {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: require.resolve('file-loader'),
          exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
          options: {
            name: '/src/images/[name].[hash:8].[ext]',
          },
        },
      ],
    },
  ]