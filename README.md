> 8.9
#### Q1 NodeJs中的全局变量path下的方法join和resolve的区别？
- path.join将指定的path片段连接起来，并规范化生成的路径
```javascript
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// /foo/bar/baz/asdf/

path.join('')
// . 当前文件夹
```

- path.resolve会把路径片段连接后解析成一个绝对路径。说白了，如果resolve方法中传入的第一个路径为绝对路径，如'/src'，则解析时会将'/src'用上生成最终的绝对路径；如果resolve方法中传入的第一个路径为相对路径，如'src'，则解析时会在路径前添上当前工作目录'/Users/zengyumeng/Web/study-webpack3/'。
```javascript
path.resolve('/src');
// /src

path.resolve('src','style','..');
// /Users/zengyumeng/Web/study-webpack3/src
```

- __dirname为当前执行文件所在文件夹的路径

#### Q2 和CSS有关的几个loader的区别？（style-lolader css-loader sass-loader postcss-loader）
- sass-loader    将scss编译成css
- css-loader     解析@import()、url()方式引入的css
- style-loader   解析css代码到style标签，放入head标签当中
- postcss-loader 添加css属性浏览器前缀(在sass-loader之前，css-loader之后使用它)

#### Q3 不同mode下webpack自动配置plugin有哪些？各自的作用？
- mode=production 将process.env.NODE_ENV设置为production，启用
    - FlagDependencyUsagePlugin
    - FlagIncludedChunksPlugin 
    - ModuleConcatenationPlugin 用一种很高端的方法提升打包出的代码在浏览器中的执行速度
    - NoEmitOnErrorsPlugin 在编译出现错误时，用于跳过输出阶段
    - OccurrenceOrderPlugin
    - SideEffectsFlagPlugin 
    - UglifyJsPlugin 压缩代码

- mode=development 将process.env.NODE_ENV设置为development，启用
    - NamedChunksPlugin
    - NamedModulesPlugin 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境

#### 配置内容
- 配置好所有需要的loader √
- 配置好HRM（开发环境）√
- 配置好几个基础的插件 √
- 分好开发环境和生产环境文件，为后续配置做好准备 √

> 8.10
#### Q1 source-map是什么玩意儿？
- webpack在打包的过程中，会将源代码压缩、去空格、babel转码，最终获得适合生产环境的项目代码，这样经过处理的目标代码与源代码之间存在很大的差异，会导致无法debug的问题。source-map就是在两者之间构建了桥梁来解决问题。
- webpack的devtool工具一共有7种模式，每种模式生成的map工具都不同(有些是map文件，有些是嵌入datURL)。综合来看，开发模式适用“cheap-module-eval-source-map”，生产模式适用“cheap-module-source-map”。

#### Q2 process.env.NODE_ENV对配置的影响，以及DefinePlugin插件的作用？
- DefinePlugin配置的NODE_ENV是针对将被编译和打包的文件、依赖的。如自己编写的组件或者依赖的包中需要通过判断NODE_ENV来执行不同代码，即可配置DefinePlugin。
- webpack4中通过配置mode，webpack将会自动帮我们配置好DefinePlugin。

- 如果需要在webpack配置文件中使用NODE_ENV，可使用工具cross-env传入。DefinePlugin中配置的NODE_ENV不会在配置文件中起作用。

#### Q3 和react有关的几个babel-plugin的作用？
- babel-plugin-transform-class-properties 转换class的属性(不知道为什么，加上该组件才能使用箭头函数)
- babel-plugin-syntax-dynamic-import 动态import
- 其实以上两个都不是跟react有关的，是跟ES6有关的

#### 配置内容
- 修改配置，支持react开发 √
- 搭建好基本的react开发框架 √
- 配置好react-router和import()动态加载
- 配置好devtool工具

> 8.13
#### 配置内容
- 配置build下文件夹分类 
- 学习HOC，看懂react-dnd √

#### Q1通过import()动态加载的模块中，如果有引入css，动态加载会失败

> 8.20
- 添加login页面，调试/login接口

#### 前后端分离后导致的路由问题，前端路由or后端路由

> 8.26 
- 添加了koa-jwt与jsonwebtoken。但非公共api(/api/form)仍然返回401

#### 前后端之间的用户认证机制

> 8.30
- 添加passport用户认证

>9.04
- 添加Bridge模块
- post请求的参数和content-type对应

