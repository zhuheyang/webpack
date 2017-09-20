#First time I use webpack
想总结一下
1.代码分割
2.Loaders:style-loader,css-loader,file-loader,url-loader,csv-loader,xml-loader
3.插件机制
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
##配置文件
###配置选项
###常用选项的含义及用法
##开发调试
### webpack-dev-server
webpack-dev-server 是一个基于 Express 的 Node.js 服务器
##插件
###插件使用
####安装插件
####在webpac.configure.js中引用插件
####在插件选项中注册该插件
###内置插件
###常用插件




