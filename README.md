JavaScript Webpack Dev Server "publicPath" Demo
===============================================

webpack-dev-server默认只会在`/`下生成bundle文件，并不会读取webpack.config.js
的output中指定的目录。所以如果需要一个特定的路径，就需要在`devServer.publicPath`
中指定。

```
npm install
npm run demo
```
