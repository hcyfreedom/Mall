/**
 * Created by yujingyang on 2017/3/15.
 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackDevConfig = require('../webpack.config');

var CSS_DIR = path.join(__dirname, "..", "css");
var IMG_DIR = path.join(__dirname, "..", "imgs");
module.exports = function () {
    var app = new express();

    var compiler = webpack(webpackDevConfig);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackDevConfig.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));

    app.use('/css', express.static(CSS_DIR));
    app.use('/img', express.static(IMG_DIR));

    require('./api')(app);

    app.get("/*", function (req, res) {
        res.sendFile(__dirname + '/index.html');
    });

    var APP_PORT = 3001;
    app.listen(APP_PORT, function (error) {
        if (error) {
            console.error(error);
        } else {
            console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", APP_PORT, APP_PORT);
        }
    });
};

//# sourceMappingURL=express-compiled.js.map