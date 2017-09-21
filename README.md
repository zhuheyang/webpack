#First time I use webpack
    想总结一下:
1.代码分割
2.Loaders:style-loader,css-loader,file-loader,url-loader,csv-loader,xml-loader
3.插件机制

##常犯错误
1.webpack.config.js中添加新的module或者plugins,老是会忽略再上一个尖括号(the right braces)后面加上一个逗号
2.json文件与config文件的不同.json文件是如果在script阐述或者devDependecies阐述最后的多加了一个comma逗号的话,是会出现编译错误的.(不过这总是会被提醒的,注意不要出现类似的错误即可)

```
Eg:
npm ERR! Failed to parse json
npm ERR! Trailing comma in object at 10:3
npm ERR!   },
npm ERR!   ^
npm ERR! File: /home/lin/workspace/webpack-demo/package.json
npm ERR! Failed to parse package.json data.
npm ERR! package.json must be actual JSON, not just JavaScript.
```


##安装
    全局安装:可使webpack在全局环境使用:$npm install --global webpack(不推荐全局安装 webpack。这会将您项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败)
    本地安装:npm install --save-dev webpack
    npm install --save-dev webpack@<version>
    (对于大多数项目,建议本地安装,在引入破坏式变更的依赖时,更容易升级项目.)
##基本的使用
1.初始化npm项目 $npm init -y
2.项目中安装webpack $npm install webpack -save-dev
3.执行打包命令 $ webpack 入口文件 出口文件 
    Eg:$./node_modules/.bin/webpack src/index.js dist/bundle.js

##webpack命令行

##管理资源--usingloader

###依赖图(Dependency Graph)

    一个文件依赖于另一个文件，webpack 就把此视为文件之间有依赖关系。这使得 webpack     可以接收非代码资源(non-code asset)（例如图像或web字体),并且可以把它们作为依赖提供给你的应用程序。
    webpack可通过loader引入任何类型的文件,就好像是不同文件之间的转换器一样.webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。这些都是在config文件中的module:配置中设置相关.

##配置文件

###配置选项

###常用选项的含义及用法

##管理输出

    然而随着应用程序增长，并且一旦开始对文件名使用哈希(hash)]并输出多个 bundle，手动地对 index.html 文件进行管理，一切就会变得困难起来。
    插件使用:CleanWebpackPlugin  HtmlWebpackPlugin
    通过 manifest，webpack 能够对「你的模块映射到输出 bundle 的过程」保持追踪。

##开发调试

###devtool: 'inline-source-map',

### webpack-dev-server

    webpack-dev-server 是一个基于 Express 的 Node.js 服务器
    webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。
```
+   devServer: {
+     contentBase: './dist'
+   },
```
    以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
```
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "watch": "webpack --progress --watch",
+     "start": "webpack-dev-server --open",
      "build": "webpack"
```
    以上添加一个 script 脚本，可以直接运行开发服务器(dev server)
    启动webpack-dev-server后，在目标文件夹中是看不到编译后的文件的,实时编译后的文件都保存到了内存当中。因此使用webpack-dev-server进行开发的时候都看不到编译后的文件!


##插件

###插件使用

####安装插件

####在webpac.configure.js中引用插件

####在插件选项中注册该插件

###内置插件

###常用插件




