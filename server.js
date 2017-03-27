var express = require('express');
var app = express();

if(process.env.NODE_ENV == "development") {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 2000,
  }));
}

app.use(express.static(__dirname + '/www'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
