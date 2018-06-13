import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false, //webpack will list all information bundling
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // node, electron
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },//where to create the dev bundle
    //webpack won't actually generate any physical files, serves the build from memory
  plugins: [],//option plugins eg hotreloading errorcheck linting etc
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }//concept loaders, teaches how to manage different file types
}
